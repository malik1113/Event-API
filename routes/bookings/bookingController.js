const Booking = require("./bookingsModel")
const { getEventById } = require("../events/eventController")
const Event = require("../events/eventModels")
// add getEventById function for ticket availability and pricing data
const getAllBooking = async () => {
    try {

        // populate allows us when refering to another model instead of there id give us there actual data 
        const bookings = await Booking.find().populate("user").populate("event")
        return bookings
    } catch (error) {
        throw error
    }

}
const createBooking = async (bookingData) => {
    try {
        console.log(bookingData)
        // utilize our existing controller to grab the eveent by its ID in order for us to calculate the price
        // booking.event - id of the event were looking for
        const event = await getEventById(bookingData.event);

        //event.availableTickets 
        const newAvailableTickets = event.availableTickets - bookingData.quantity

        // 2nd parameter is what we want to update
        await Event.findByIdAndUpdate(bookingData.event, { availableTickets: newAvailableTickets, })

        // copying everything from ouir booking data into a new object that we are free to modify
        const calculatedBookingData = {
            user: bookingData.user,
            event: bookingData.event,
            quantity: bookingData.quantity,
            status: bookingData.status,
            // totalprice: oour total price calculation
            totalPrice: bookingData.quantity * event.price
        }
        // mongooses user.create() adds data to database... creates user and adds to the database
        const newBooking = await Booking.create(calculatedBookingData)
        return newBooking
    } catch (error) {
        throw error
    }

}

module.exports = { 
    createBooking,
    getAllBooking
}