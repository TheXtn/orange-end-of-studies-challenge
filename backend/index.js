const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/dbconfig/db');
dotenv.config();

const app = express();
connectDB();

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));