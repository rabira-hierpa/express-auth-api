const express = require('express');
var dotenv = require('dotenv');
const mongoose = require('mongoose');
const body_parser = require('body-parser');

const app = express();
// Import routes
const authRoute = require('./routes/auth');
const homeRoute = require('./routes/home');

dotenv.config();
var db_url = process.env.MONGO_ATLAS_DB;

// Connect to DB
mongoose.connect(db_url, { useNewUrlParser: true }, () => {
	console.log('Connected to MongoDB datasource!');
});

// Middleware
app.use(express.json());
app.use(body_parser.json());
// Route Middlewares
app.use('/api/user/', authRoute);
app.use('/api', homeRoute);

app.listen(3000, () => {
	console.log('Server is up and running');
});
