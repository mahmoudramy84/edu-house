// models/Lesson.js
const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String, // URL or content of the lesson (video URL, etc.)
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Lesson', LessonSchema);
