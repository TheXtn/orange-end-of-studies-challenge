const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/dbconfig/db');
const userRoutes = require('./src/routes/auth');
const itemRoutes=require('./src/routes/item');
const cookieParser = require('cookie-parser');
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true };

dotenv.config();


const app = express();

app.use(bodyParser.json({limit : "50mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "50mb", extended : true}));

/*activating db*/
connectDB();

/*cors and cookie use*/
app.use(cors(corsOptions));
app.use(cookieParser());


/*middleware and routing*/
app.use(userRoutes);
app.use(itemRoutes),

/*listener*/
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));