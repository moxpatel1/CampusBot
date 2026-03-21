const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key_here';

// Connect to MongoDB and then start server
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/CampusBot';
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Successfully connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

// Registration Schema
const registrationSchema = new mongoose.Schema({
    eventId: { type: String, required: true },
    fullname: { type: String, required: true },
    branch: { type: String, required: true },
    contact: { type: String, required: true },
    registeredAt: { type: Date, default: Date.now }
});
const Registration = mongoose.model('Registration', registrationSchema, 'users');

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer TOKEN"

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ error: 'Invalid or expired token.' });
    }
};

// Routes
// POST: Register a user for an event (Protected by JWT)
app.post('/api/register', authenticateToken, async (req, res) => {
    try {
        const { eventId, fullname, branch, contact } = req.body;

        // Basic validation
        if (!eventId || !fullname || !branch || !contact) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        // Insert into MongoDB
        const newRecord = new Registration({ eventId, fullname, branch, contact });
        const savedRecord = await newRecord.save();

        res.status(201).json({
            message: 'Registration successful',
            registration: {
                id: savedRecord._id,
                eventId: savedRecord.eventId,
                fullname: savedRecord.fullname,
                branch: savedRecord.branch,
                contact: savedRecord.contact
            }
        });

    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ error: 'Failed to process registration.' });
    }
});

// Auth Routes

// POST: Signup new user
app.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully.' });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ error: 'Server error during signup.' });
    }
});

// POST: Login user
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        // Check for user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Validate password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'Invalid email or password.' });
        }

        // Create and assign a token
        const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '24h' });
        
        res.status(200).json({
            message: 'Logged in successfully',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ error: 'Server error during login.' });
    }
});

// Basic health check route
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'Backend is running smoothly.' });
});
