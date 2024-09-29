// controllers/courseController.js
const Course = require('../models/Course');

// Add a new course
exports.addCourse = async (req, res) => {
    const { title, description } = req.body;

    try {
        const newCourse = new Course({
            title,
            description,
        });

        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Get a course by ID
exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ msg: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Update a course
exports.updateCourse = async (req, res) => {
    const { title, description } = req.body;

    try {
        let course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ msg: 'Course not found' });

        course.title = title || course.title;
        course.description = description || course.description;

        await course.save();
        res.json(course);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ msg: 'Course not found' });

        await course.deleteOne();
        res.json({ msg: 'Course removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};
