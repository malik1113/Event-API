const Booking = require("./bookingsModel")

const createBooking = async (bookingData) => {
    try {
        // mongooses user.create() adds data to database... creates user and adds to the database
        const newBooking = await Booking.create(bookingData)
        return newBooking
    } catch (error) {
        throw error
    }

}

module.exports = { 
    createBooking
}