const Event = require("./eventModels");

// Create events
const createEvent = async (eventData) => {
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
const getEvent = async (filterQueries) => {
    try {
        // keep track of filters
        const queryObject = {};

        // keep track of sorts and sort order
        const sortObject = {};

        
        
        // if we have a category query
        if(filterQueries.category) {
            queryObject.category = filterQueries.category
        }
        if(filterQueries.minPrice && filterQueries.maxPrice) {
            //queryObject.minPrice = Number(filterQueries.minPrice)
            //queryObject.maxPrice = Number(filterQueries.maxPrice)

            // greater than or equal to min
            // and less than equal to max
            // $gte: and $lte: are used in Mongoose for filtering by ranges
            queryObject.price = { 
                $gte: Number(filterQueries.minPrice),
                $lte: Number(filterQueries.maxPrice)

            };
        }

        if (filterQueries.sortBy) {
            if (filterQueries.sortOrder === "desc") {
              sortObject[filterQueries.sortBy] = -1;
            } else {
            // sortBy = 1
            // adds price key to our sort object
            sortObject[filterQueries.sortBy] = 1; // 1 for ascending
            
        }
    }
            // filterQueries.category
        // filterQueries.minPrice
        // .find() keys - what you are trying to filter by
        // const events = await Event.find({ category: filterQueries.category });
        // .sort(key: 1) = ascending sort
        // .sort(key: -1) = descending sort
        const event = await Event.find(queryObject).sort(sortObject)
        return event
    } catch (error) {
        throw error
    }
};
// goal: find what we want to update by its id and update it way to figure out what we aare updating
//what to update - everything specifically in the req.body
const updateEventById = async (eventId, eventData) => {
    try {
        const updatedEvent = await Event.findByIdandUpdate(eventId, eventData, {new: true})
        console.log("updated");
        console.log(updatedEvent)
        return updatedEvent;
    } catch (error) {
        throw error
    }
}
module.exports =  {
    createEvent,
    getEvent,
    getEventById,
    updateEventById
}