const User = require('./models/user'); // เปลี่ยนเป็น path ที่ถูกต้องสำหรับโมเดลของคุณ
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3002; // 


// เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb+srv://admin:mcUbdDjlBr5FGY67@cluster0.g1xzp.mongodb.net/SutRLAdmin')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// เปิดใช้งาน CORS
app.use(cors());

// ใช้ express.json()
app.use(express.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    res.json({ success: true, message: 'Login successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An unexpected error occurred' });
  }
});


// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
