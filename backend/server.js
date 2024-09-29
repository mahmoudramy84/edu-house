const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 3000;
const trackRoutes = require('./routes/tracks');
const courseRoutes = require('./routes/courses');
const lessonRoutes = require('./routes/lessons');

dotenv.config();

// Middleware
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


// Routes
app.use('/tracks', trackRoutes);
app.use('/courses', courseRoutes);
app.use('/lessons', lessonRoutes);


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
