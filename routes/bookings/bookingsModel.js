const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const bookingSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    event: {
        type: ObjectId,
        ref: "Event",     // we reference from model name const Event = mongoose.model("Event", eventSchema)
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    totalPrice: {
        type: Number,

    },
    status: {
        type: String,
        required: true,
        default: "confirmied"
    }

}, {
    timestamps: true
})
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking
