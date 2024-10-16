// routes/lessons.js
const express = require('express');
const router = express.Router();
const { addLesson, getLessons, getLessonById, updateLesson, deleteLesson } = require('../controllers/lessonController');

// Create a new lesson
router.post('/', addLesson);

// Get all lessons
router.get('/', getLessons);

// Get a lesson by ID
router.get('/:id', getLessonById);

// Update a lesson
router.put('/:id', updateLesson);

// Delete a lesson
router.delete('/:id', deleteLesson);

module.exports = router;
