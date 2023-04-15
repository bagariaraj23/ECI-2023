import Mongoose from "mongoose";

const reviewSchema = Mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  voterID: {
    type: String,
    require: true,
    unique: true,
  },
  votingExperience: {
    type: String,
    require: true,
  },
  story: {
    type: String,
    require: false,
  },
  studentPerformanceRating: {
    require: [true, "Please provide a rating for student performance in range 1-5"],
    type: Number,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} is not an integer value for rating",
    },
  },
  pictures: {
    type: Array,
    require: false,
  },
});
const review = Mongoose.model("review", reviewSchema);

export default review;
