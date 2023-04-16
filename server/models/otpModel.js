import { Schema, model } from "mongoose";

export default model("Otp", new Schema({
    otp: {
        type: Number,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300,
    }
},{timestamps: true}));