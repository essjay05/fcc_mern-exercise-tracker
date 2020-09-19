// Constants
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,  {useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once ('open', () => {
    console.log( `MongoDB database connection established successfully` );
})

// Import Routers
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use( '/exercises', exercisesRouter );
app.use('/users', usersRouter );

// Port/Server Connection
app.listen(PORT, () => {
    console.log( `Success! Server is running on PORT: ${PORT}` );
})

// Note: Successfully completed/created backend and routes for Users (create, read all) and Exercises (full CRUD).