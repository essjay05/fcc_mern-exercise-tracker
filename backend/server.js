// Constants
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Port/Server Connection
app.listen(PORT, () => {
    console.log(`Success! Server is running on PORT: ${PORT}`);
})

