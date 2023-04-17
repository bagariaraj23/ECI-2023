import twilio from "twilio";
import bcrypt from "bcrypt";
import _ from "lodash";
import axios from "axios";
import otpGenerator from "otp-generator";

import User from "../models/userSchema.js";
import Otp from "../models/otpModel.js";

export const signUp = async (req, res) => {
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

  const accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
  const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
  const client = new twilio(accountSid, authToken);
  client.messages
    .create({
      body: `Your verification OTP is : ${OTP}`,
      to: `+91${number}`, // Text this number
      from: `${process.env.PHONE_NUMBER}`, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

  const salt = await bcrypt.genSalt(10);
  const hashedOTP = await bcrypt.hash(OTP, salt);

  const otp = new Otp({ number: number, otp: String(hashedOTP) });

  const result = await otp.save();

  return res.status(200).send("OTP Sent Successfully");
};

export const login = async (req, res) => {
  const { number } = req.body;

  console.log(number);

  if (!number) return res.status(400).send("Number is required");

  const OTP = otpGenerator.generate(6, {
    digits: true,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });

  console.log(OTP);

  const accountSid = process.env.ACCOUNT_SID; // Your Account SID from www.twilio.com/console
  const authToken = process.env.AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
  const client = new twilio(accountSid, authToken);
  client.messages
    .create({
      body: `Your verification OTP is : ${OTP}`,
      to: `+91${number}`, // Text this number
      from: `${process.env.PHONE_NUMBER}`, // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

  const salt = await bcrypt.genSalt(10);
  const hashedOTP = await bcrypt.hash(OTP, salt);

  const otp = new Otp({ number: number, otp: String(hashedOTP) });

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

  // console.log(req.body.otp);
  // console.log(typeof(rightOtpFound.number));
  // console.log(typeof(req.body.number))
  // console.log(rightOtpFound.number);
  // console.log(req.body.number);

  if (
    rightOtpFound.number === req.body.number && 
    validUser) {
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

