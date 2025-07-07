const User = require("./userModel");
// get users so we don't need a parameter when we want ALL the data 
const getUsers = async () => {
    try {
        const users = await User.find()
        return users
    } catch (error) {
        throw error
    }
}
// get User By Id and MUST THEREFORE have a parameter 
const getUserById = async (id) => {
    
    try {
        const user = User.findById(id)
        return user;
    } catch (error) {
        throw error;
    }

}
// request.body  will become userData
// everything yu pass into a function becomes the parameter of that function
// the parameter takes the place of the arguments you call the function with 
// ALAWAYS TRU!! FOR ALL FUNCTIONs
const createUser = async () => {
    try {
        // mongooses user.create() adds data to database... creates user and adds to the database
        const newUser = await User.create(userData)
        return newUser
    } catch (error) {
        throw error
    }

}
module.exports =  {
    createUser,
    getUsers,
    getUserById
}