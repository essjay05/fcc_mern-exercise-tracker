// Require constants
const mongoose = require('mongoose');

// Create Schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
}, {
    timestamps: true,
});

// Create model Constant
const User = mongoose.model( 'User', userSchema );

// Export model Constant
module.exports = User;