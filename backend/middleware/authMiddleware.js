const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied, no token provided' });

    try {
        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token' });
    }
};

// Middleware to check if the user has a specific role (e.g., instructor)
const requireRole = (role) => (req, res, next) => {
    if (req.user.role !== role) {
        return res.status(403).json({ message: 'Access denied, insufficient permissions' });
    }
    next();
};

module.exports = { verifyToken, requireRole };
