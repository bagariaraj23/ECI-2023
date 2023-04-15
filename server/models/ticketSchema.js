import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ticketId: {
    type: String,
  },
  expiresAt: {
    type: Date,
    required: [true, "Please provide expiry date"],
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
