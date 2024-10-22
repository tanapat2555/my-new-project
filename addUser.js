const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // ตรวจสอบให้แน่ใจว่า path ถูกต้อง

mongoose.connect('mongodb+srv://admin:mcUbdDjlBr5FGY67@cluster0.g1xzp.mongodb.net/SutRLAdmin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

const addUser = async () => {
  const email = 'p2799239@gmail.com'; // แก้ไขเป็นอีเมลจริง
  const password = 'ootoom2545'; // แก้ไขเป็นรหัสผ่านจริง

  // เข้ารหัสรหัสผ่าน
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await newUser.save();
    console.log('User added:', savedUser);
  } catch (error) {
    console.error('Error adding user:', error);
  } finally {
    mongoose.connection.close();
  }
};

addUser();
