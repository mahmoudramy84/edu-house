// controllers/trackController.js
const Track = require('../models/Track');

// Add a new track
exports.addTrack = async (req, res) => {
    const { name, description, courses } = req.body;

    try {
        const newTrack = new Track({
            name,
            description,
            courses
        });

        const savedTrack = await newTrack.save();
        res.status(201).json(savedTrack);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Get all tracks
exports.getTracks = async (req, res) => {
    try {
        const tracks = await Track.find().populate('courses', 'title');
        res.json(tracks);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Get a track by ID
exports.getTrackById = async (req, res) => {
    try {
        const track = await Track.findById(req.params.id).populate('courses', 'title');
        if (!track) return res.status(404).json({ msg: 'Track not found' });
        res.json(track);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Update a track
exports.updateTrack = async (req, res) => {
    const { name, description, courses } = req.body;

    try {
        let track = await Track.findById(req.params.id);
        if (!track) return res.status(404).json({ msg: 'Track not found' });

        track.name = name || track.name;
        track.description = description || track.description;
        track.courses = courses || track.courses;

        await track.save();
        res.json(track);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Delete a track
exports.deleteTrack = async (req, res) => {
    try {
        const track = await Track.findById(req.params.id);
        if (!track) return res.status(404).json({ msg: 'Track not found' });

        await track.deleteOne();
        res.json({ msg: 'Track removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};
