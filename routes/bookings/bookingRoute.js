const express = require("express")
const router = express.Router();
const { createBooking, getAllBooking } = require("./bookingController")
router.post("/", async (req,res) => {
    try {
        const booking = await createBooking(req.body)
        res.json({
            message: "success", payload: booking
        })

    } catch (error) {
        res.json({
            message: "failure", payload: error
        })
    }
})
router.get("/", async (req,res) => {
    const bookings = await getAllBooking()
    try {
        res.json({
            message: "success", payload: bookings
        })
    } catch (error) {
        throw error.message
    }
})
module.exports = router;