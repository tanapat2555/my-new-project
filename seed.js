const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // ตรวจสอบให้แน่ใจว่าที่อยู่ถูกต้อง

// เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb+srv://admin:mcUbdDjlBr5FGY67@cluster0.g1xzp.mongodb.net/SutRLAdmin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    createUser();
  })
  .catch(err => console.error('Could not connect to MongoDB:', err));

// ฟังก์ชันสร้างผู้ใช้ใหม่
async function createUser() {
  const newUser = new User({
    email: 'tanapat.supasa2559@gmail.com', 
    password: await bcrypt.hash('ootoom2545', 10), 
  });

  try {
    await newUser.save();
    console.log('User created successfully!');
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    mongoose.connection.close(); // ปิดการเชื่อมต่อ
  }
}
