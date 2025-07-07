const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()
const connectToMongoDB =  async () => {
    mongoose.set("strictQuery", false)
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect to mongoDB")
    } catch (error) {
        console.log("Db connection failed")
        
    }
}
module.exports = connectToMongoDB