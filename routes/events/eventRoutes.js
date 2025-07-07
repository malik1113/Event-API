const express = require("express")
const router = express.Router();
const { createEvent, getEvents, getEventById } = require("./eventController")

router.get("/", async (req, res) => {
    try {
        // no parameters cause we want all
        const events = await getEvents();
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
module.exports = router