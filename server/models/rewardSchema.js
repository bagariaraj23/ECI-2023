import mongoose from "mongoose";

const rewardSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: [true, 'Please provide user id'],
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'Please provide name of reward'],
        maxlength: 50,
        minlength: 3,
    },
    description: {
        type: String,
        required: [true, 'Please provide description'],
        maxlength: 500,
        minlength: 3,
    },
    points: {
        type: Number,
        required: [true, 'Please provide points'],
        min: 1,
    },
    image: {
        type: String,
        required: [true, 'Please provide image url'],
    },
    rewardCode: {
        type: String,
        required: [true, 'Please provide reward code'],
    },
    category: {
        type: String,
        required: [true, 'Please provide category'],
    },
})

export default mongoose.model('Reward', rewardSchema);