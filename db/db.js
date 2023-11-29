const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = async () =>{
    try { 
        await mongoose.connect(process.env.MONGO_CNN)
        console.log("dataBase online")
    } catch {
        console.log("dataBase conection error")
    }
}
module.exports = {dbConnection}