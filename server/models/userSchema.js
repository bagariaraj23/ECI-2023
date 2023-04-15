import mongoose from "mongoose";

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
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  adhaar: {
    type: String,
    required: [true, "Please provide adhaar"],
    minlength: 12,
    match: [/^[0-9]{12}$/, "Please Provide a valid adhaar"],
  },
  voterId: {
    type: String,
    required: [true, "Please provide voterId"],
    match: [/^[a-zA-Z]{3}[0-9]{7}$/, "Please Provide a valid voterId"],
  },
});

export default mongoose.model("User", userSchema);
