const mongoose = require('mongoose')

const connectDB= async()=>{
 try {
    const conn=await mongoose.connect("mongodb+srv://agastya:12345@cluster0.8rateox.mongodb.net/?retryWrites=true&w=majority")
      console.log(`MongoDB Connected: ${conn.connection.host}`);

      
 } catch (error) {
    
    console.log(`Error: ${error.message}`);
    process.exit();
 }
}

module.exports = connectDB
