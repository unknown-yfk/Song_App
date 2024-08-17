const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');
const songRoutes = require('./src/routes/songRoutes');
const cors = require('cors');


dotenv.config();
connectDB();


const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', songRoutes);



module.exports = app;

