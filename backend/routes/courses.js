// routes/courses.js
const express = require('express');
const router = express.Router();
const { addCourse, getCourses, getCourseById, updateCourse, deleteCourse } = require('../controllers/courseController');
const { verifyToken, requireRole } = require('../middleware/authMiddleware');

// Create a new course
router.post('/', verifyToken, requireRole('instructor'), addCourse);

// Get all courses
router.get('/', verifyToken, getCourses);

// Get a course by ID
router.get('/:id', verifyToken, getCourseById);

// Update a course
router.put('/:id', verifyToken, requireRole('instructor'), updateCourse);

// Delete a course
router.delete('/:id', verifyToken, requireRole('admin'), deleteCourse);

module.exports = router;
