import User from "../models/userSchema.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/bad-request.js";
import UnauthenticatedError from "../errors/unauthenticated.js";

const register = async (req, res) => {
    console.log("login");
};

const login = async (req, res) => {
    console.log("register");
};

export default {
    login,
    register,
};