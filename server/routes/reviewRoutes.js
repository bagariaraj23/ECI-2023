import express from "express";
const router = express.Router();

import {createReview, getReviews, getReview} from "../controller/reviewController.js";

router.route("/").post(createReview).get(getReviews);
router.route("/:id").get(getReview);

export default router;