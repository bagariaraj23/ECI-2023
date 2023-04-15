import User from "../models/userSchema.js";
import { StatusCodes } from "http-status-codes";


export const register = async (req, res) => {
    // res.json(req.body);
    const user = await User.create({...req.body});
    res.status(StatusCodes.CREATED).json(req.body);
};

export const login = async (req, res) => {
    res.json(req.body);
};
