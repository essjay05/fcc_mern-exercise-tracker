// Require constants
const mongoose = require('mongoose');

// Create Schema
const Schema  = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

// Create exportable constant
const Exercise = mongoose.model( 'Exercise',  exerciseSchema );

// Export constant
module.exports = Exercise;