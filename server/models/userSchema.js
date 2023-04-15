import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: [true, "Please provide name"],
    maxlength: 50,
    minlength: 3,
  },
  number:{
    type: String,
    required: [true, "Please provide Phone number"],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  aadhaar: {
    type: String,
    required: [true, "Please provide aadhaar"],
    minlength: 12,
    match: [/^[0-9]{12}$/, "Please Provide a valid aadhaar Number"],
  },
  voterId: {
    type: String,
    required: [true, "Please provide voterId"],
    match: [/^[a-zA-Z]{3}[0-9]{7}$/, "Please Provide a valid voterId"],
  },
}, { timestamps: true });

userSchema.methods.generateJWT = function () {
  const token = jwt.sign({
    _id: this._id,
    number: this.number,
  }, process.env.JWT_SECRET_KEY, { expiresIn: "30d" });
  return token;
}

export default mongoose.model("User", userSchema);
