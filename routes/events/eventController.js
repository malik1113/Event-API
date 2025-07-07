const Event = require("./eventModels");

// Create events
const createEvent = async () => {
    try {
        // mongooses user.create() adds data to database... creates user and adds to the database
        const newEvent = await Event.create(eventData)
        return newEvent
    } catch (error) {
        throw error
    }

}


// Get Event by Id
const getEventById = async (id) => {
    
    try {
        const event = Event.findById(id)
        return event;
    } catch (error) {
        throw error;
    }

}

// Get All Events
const getEvent = async () => {
    try {
        const event = await Event.find()
        return event
    } catch (error) {
        throw error
    }
}
module.exports =  {
    createEvent,
    getEvent,
    getEventById
}