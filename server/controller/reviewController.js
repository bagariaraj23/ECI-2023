import reviewSchema from "../models/reviewSchema.js";
import Mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import CustomAPIError from "../errors/custom-api.js";

export const createReview = async (req, res) => {
  const review = await reviewSchema.create(req.body);
  return res.status(StatusCodes.CREATED).json({ review });
};

export const getReviews = async (req, res) => {
  const reviews = await reviewSchema.find({});
  return res.status(StatusCodes.OK).json({ reviews });
};

export const getReview = async (req, res) => {
  const review = await reviewSchema.findById(req.params.id);
  if (!review) {
    throw new CustomAPIError("Review not found", StatusCodes.NOT_FOUND);
  }
  return res.status(StatusCodes.OK).json({ review });
};
