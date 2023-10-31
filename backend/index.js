const path=require('path');
require('dotenv').config({path:path.resolve(__dirname, './.env')});
const express = require('express');
const app = express();
const connectDB = require('./database/db');
connectDB();
app.get('/', (req, res) =>{
    res.send("hi from server")
})
app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});
