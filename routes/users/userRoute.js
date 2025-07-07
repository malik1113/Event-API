const express = require("express")
const router = express.Router();
const { createUser, getUsers, getUserById } = require("./userController")

router.get("/", async (req, res) => {
    try {
        // no parameters cause we want all
        const users = await getUsers();
            res.json({message: "success", payload: users
        })
    } catch (error) {
        res.json({message: "failure", payload: error
        })
    }
})


router.get("/:id", async (req,res) => {
    try {                            // 
        const users = await getUserById(req.params.id);
            res.json({message: "success", payload: users
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
        const newUser = await createUser(req.body)
        res.json({ message: " successfully created user", payload: newUser})
    } catch (error) {
        res.json({
            message: "failure",
            payload: error.message
        })
        
    }
    })
module.exports = router