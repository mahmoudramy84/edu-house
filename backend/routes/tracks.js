// routes/tracks.js
const express = require('express');
const router = express.Router();
const { addTrack, getTracks, getTrackById, updateTrack, deleteTrack } = require('../controllers/trackController');

// Create a new track
router.post('/', addTrack);

// Get all tracks
router.get('/', getTracks);

// Get a track by ID
router.get('/:id', getTrackById);

// Update a track
router.put('/:id', updateTrack);

// Delete a track
router.delete('/:id', deleteTrack);

module.exports = router;
