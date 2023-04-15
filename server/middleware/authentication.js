import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import unauthenticatedError from "../errors/unauthenticated.js";

const auth = async (req, res, next) => {
  //check header

};

export default auth;