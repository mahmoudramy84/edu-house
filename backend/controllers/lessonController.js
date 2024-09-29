// controllers/lessonController.js
const Lesson = require('../models/Lesson');

// Add a new lesson
exports.addLesson = async (req, res) => {
    const { title, content, courseId } = req.body;

    try {
        const newLesson = new Lesson({
            title,
            content,
            course: courseId
        });

        const savedLesson = await newLesson.save();
        res.status(201).json(savedLesson);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Get all lessons
exports.getLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find().populate('course', 'title');
        res.json(lessons);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Get a lesson by ID
exports.getLessonById = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id).populate('course', 'title');
        if (!lesson) return res.status(404).json({ msg: 'Lesson not found' });
        res.json(lesson);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Update a lesson
exports.updateLesson = async (req, res) => {
    const { title, content } = req.body;

    try {
        let lesson = await Lesson.findById(req.params.id);
        if (!lesson) return res.status(404).json({ msg: 'Lesson not found' });

        lesson.title = title || lesson.title;
        lesson.content = content || lesson.content;

        await lesson.save();
        res.json(lesson);
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};

// Delete a lesson
exports.deleteLesson = async (req, res) => {
    try {
        const lesson = await Lesson.findById(req.params.id);
        if (!lesson) return res.status(404).json({ msg: 'Lesson not found' });

        await lesson.deleteOne();
        res.json({ msg: 'Lesson removed' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
};
