const express= require('express');
const app=express();
const dotenv=require('dotenv');
const connectDB = require('./database/connection');
const PORT=process.env.PORT||3001;
const cors=require('cors');
const logger=require('morgan');

// Cors
app.use(cors());
//Logger
app.use(logger("dev"));
//body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//server
const server=require('http').createServer(app);
dotenv.config();
server.listen(PORT,()=>{
    console.log("server is running on : %s",PORT)
})

//database
connectDB();
//routes
app.use('/item',require('./routes/item.route'));
app.use('/user',require('./routes/user.route'));