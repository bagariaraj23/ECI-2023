import twilio from "twilio";
import User from "../models/userSchema.js";
import Otp from "../models/otpModel.js";
import bcrypt from "bcrypt";
import _ from "lodash";
import jwt from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";

import otpGenerator from "otp-generator";

export const signUp = async (req, res) => {
  console.log(req.body)
  const user = await User.findOne({
    number: req.body.number,
  });

  if (user) return res.status(400).send("User already registered");

  const OTP = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  const number = req.body.number;
  console.log(number);
  console.log(OTP);

  const accountSid = "AC97e9cd94f5aef654bd9d9ec12d1e9a1a"; // Your Account SID from www.twilio.com/console
  const authToken = "20b16d4df445ebbcb79ac9acd3cb1800"; // Your Auth Token from www.twilio.com/console
  const client = new twilio(accountSid, authToken);
  client.messages
    .create({
      body: `Your verification OTP is : ${OTP}`,
      to: `+91${number}`, // Text this number
      from: "+16205221663", // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

  const otp = new Otp({ number: number, otp: OTP });
  const salt = await bcrypt.genSalt(10);
  otp.otp = await bcrypt.hash(otp.otp, salt);

  const result = await otp.save();

  return res.status(200).send("OTP Sent Successfully");
};

export const login = async (req, res) => {
    const { number } = req.body;

    if(!number) return res.status(400).send("Number is required");

    const OTP = otpGenerator.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    console.log(OTP);

    const accountSid = "ACa0a92d0b2dfd8f635ed2a87abecc035d"; // Your Account SID from www.twilio.com/console
    const authToken = "b313147e29b62b49d9a33d74869ae332"; // Your Auth Token from www.twilio.com/console
    const client = new twilio(accountSid, authToken);
    client.messages
      .create({
        body: `Your verification OTP is : ${OTP}`,
        to: `+91${number}`, // Text this number
        from: "+16205221093", // From a valid Twilio number
      })
      .then((message) => console.log(message.sid));

    const otp = new Otp({ number: number, otp: OTP });
    const salt = await bcrypt.genSalt(10);
    otp.otp = await bcrypt.hash(otp.otp, salt);

    const result = await otp.save();

    return res.status(200).send("OTP Sent Successfully");
};

export const verifyOtp = async (req, res) => {
  const otpHolder = await Otp.find({
    number: req.body.number,
  });
  if (!otpHolder) return res.status(400).send("Invalid Number");
  if (otpHolder.length === 0)
    return res.status(400).send("OTP has been expired");
  
  const rightOtpFound = otpHolder[otpHolder.length - 1];
  const validUser = await bcrypt.compare(req.body.otp, rightOtpFound.otp);

  if (rightOtpFound.number === req.body.number && validUser) {
    // const user = new User(_.pick(req.body, ["number"]));
    const user = await User.create({ ...req.body });
    const token = user.generateJWT();
    const result = await user.save();
    const OTPDelete = await Otp.deleteMany({
      number: rightOtpFound.number,
    });
    return res.status(200).send({
      message: "User Registered Successfully",
      token: token,
      data: result,
    });
  } else {
    return res.status(400).send("Invalid OTP");
  }
};
