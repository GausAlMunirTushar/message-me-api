const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv").config();
const  connectDB = require('../config/database');
const router = require('../routes/index');
// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB()

// POST route to save the message
app.use('/api/v1', router);

module.exports = app