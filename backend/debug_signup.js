const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

async function test() {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/CampusBot');
        console.log('Connected to DB');

        const name = "Test User";
        const email = "test" + Date.now() + "@example.com";
        const password = "password123";

        console.log('Hashing password...');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log('Hashed');

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        console.log('Saving user...');
        await newUser.save();
        console.log('User saved successfully');
        
        process.exit(0);
    } catch (err) {
        console.error('Test Failed:', err);
        process.exit(1);
    }
}

test();
