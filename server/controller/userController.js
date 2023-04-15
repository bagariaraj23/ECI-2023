import User from "../models/userSchema.js";
import Otp from "../models/otpModel.js";
import bcrypt from "bcrypt";
import _ from "lodash";
import jwt from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";

import axios from "axios";
import otpGenerator from "otp-generator";

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
  console.log(OTP);

  const otp = new Otp({ number: number, otp: OTP });
  const salt = await bcrypt.genSalt(10);
  otp.otp = await bcrypt.hash(otp.otp, salt);

  const result = await otp.save();

  return res.status(200).send("OTP Sent Successfully");
};

export const login = async (req, res) => {
    
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
    const user = new User(_.pick(req.body, ["number"]));
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
