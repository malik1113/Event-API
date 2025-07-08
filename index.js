const express = require("express");
const logger = require("morgan");
const connectToMongoDB = require("./database/connectToMongoDB")

const app = express()
const PORT = 3000;

app.use(logger("dev"))
app.use(express.json())

const userRouter = require("./routes/users/userRoute")
app.use("/api/users", userRouter)

const eventRouter = require("./routes/events/eventRoutes")
app.use("/api/events", eventRouter)

const bookingRouter = require("./routes/bookings/bookingRoute")
app.use("/api/bookings", bookingRouter)

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
    connectToMongoDB();
})