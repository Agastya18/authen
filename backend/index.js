const path=require('path');
require('dotenv').config({path:path.resolve(__dirname, './.env')});
const express = require('express');
const app = express();
const userRoutes = require('./routes/authRoutes.js')
const connectDB = require('./database/db');
connectDB();
app.use(express.json());
app.use('/api',userRoutes)




app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});
