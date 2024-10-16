// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = 'mongodb+srv://admin:mcUbdDjlBr5FGY67@cluster0.g1xzp.mongodb.net/Cluster0';
        console.log('MongoDB URI:', uri);
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
