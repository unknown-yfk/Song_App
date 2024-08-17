// src/models/Song.js
const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String },
    genre: { type: String, required: true }
});

module.exports = mongoose.model('Song', SongSchema);
