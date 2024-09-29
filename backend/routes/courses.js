// routes/courses.js
const express = require('express');
const router = express.Router();
const { addCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');

// Create a new course
router.post('/', addCourse);

// Get all courses
router.get('/', getCourses);

// Get a course by ID
router.get('/:id', getCourseById);

// Update a course
router.put('/:id', updateCourse);

// Delete a course
router.delete('/:id', deleteCourse);

module.exports = router;
