const express = require("express")
const router = express.Router();
const { createEvent, getEvents, getEventById, updateEventById } = require("./eventController")

router.get("/", async (req, res) => {
    try {
        // no parameters cause we want all params are for specific items like names/id's
        //localhost:3000/api/events?category=fun is all in getEvents(req.query);
        const events = await getEvents(req.query);
            res.json({message: "success", payload: events
        })
    } catch (error) {
        res.json({message: "failure", payload: error
        })
    }
})


router.get("/:id", async (req,res) => {
    try {                            // 
        const event = await getEventById(req.params.id);
            res.json({message: "success", payload: event
        })
    } catch (error) {
        res.json({
            message: "failure",
            payload: error.message
        })
    }
})
router.post("/", async (req, res) => {
    try {
        // get data from postman send to controller with req.body
        const newEvent = await createEvent(req.body)
        res.json({ message: " successfully created Event", payload: newEvent})
    } catch (error) {
        res.json({
            message: "failure",
            payload: error.message
        })
        
    }
    })
router.put("/:eventId", async (req, res) => {
    try {
        const updatedEvent = await updateEventById(req.params.eventId, req.body)
        res.json({message: "success", payload: updatedEvent})
    } catch (error) {
        res.json({
            message: "failure" , payload: error.message
        })
    }
})
module.exports = router