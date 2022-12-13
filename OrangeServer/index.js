const express = require('express');
const mongoose = require('mongoose');

const auth = require('./src/routes/auth');
const item = require('./src/routes/item');

const cors = require("cors")
const app = express();

app.use(require('body-parser').json());

const dbURI = 'mongodb+srv://oussama:789456123@mob.9djbbbt.mongodb.net/orangeDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { 
        app.listen(5000); 
        console.log('connected to db') ;
        console.log('Listening on port 5000') ;
    })
    .catch((err) => console.log(err)); 

const whitelist = ["http://localhost:3000"]
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
         callback(null, true)
          } else {
             callback(new Error("Not allowed by CORS"))
           }
      },
      credentials: true,
    }
app.use(cors(corsOptions));

app.use('/items',item);
app.use('/user',auth);