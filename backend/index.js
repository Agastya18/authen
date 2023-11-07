const dotenv = require('dotenv');
dotenv.config({
    path: './.env'
})
const cookieParser = require('cookie-parser')
// require('dotenv').config({path:path.resolve(__dirname, '../.env')});
const express = require('express');
const app = express();
const userRoutes = require('./routes/authRoutes.js')
const connectDB = require('./database/db');


connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use('/api',userRoutes)




app.listen(process.env.PORT, () => {
    console.log(`Server started on port : ${process.env.PORT}`);
});
