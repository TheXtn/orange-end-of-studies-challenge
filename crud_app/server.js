const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path= require('path');
const app = express();
const connectDB= require('./server/database/connection';)
dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080
app.use(morgan('tiny'));
//mongooo
connectDB();
app.use(bodyparser.urlencoded({extend:true}))
app.set("view engine","ejs")
//app.set("view",path.resolve(__dirname,"views/ejs"))
//load asset
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.get('/',(req,res)=>{
    res.render("index");

})
app.get('/add-user',(req,res)=>{
    res.render("ass-user");


})
app.get('/update-user',(req,res)=>{
    res.render("update");
})
app.use('/',require('./server/routes/router'))
app.listen(3000, ()=>{console.log(`run on http://localhost:${PORT}`)});