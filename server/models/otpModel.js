import { Schema, model } from "mongoose";

export default model("Otp", new Schema({
    otp: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300,
    }
},{timestamps: true}));