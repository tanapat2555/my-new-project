const User = require('./models/user'); // ตรวจสอบให้แน่ใจว่า path ถูกต้อง
const Article = require('./models/article'); // เพิ่มการเรียกใช้งานโมเดลบทความ
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer'); // เพิ่มการเรียกใช้ Nodemailer
const crypto = require('crypto'); // สำหรับสร้าง token รีเซ็ตรหัสผ่าน

const app = express();
const PORT = process.env.PORT || 3002;

// เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb+srv://admin:mcUbdDjlBr5FGY67@cluster0.g1xzp.mongodb.net/SutRLAdmin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// เปิดใช้งาน CORS และ express.json
app.use(cors());
app.use(express.json());

// ฟังก์ชัน login
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

// ฟังก์ชันลืมรหัสผ่าน
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User with this email does not exist' });
    }

    const resetToken = crypto.randomBytes(20).toString('hex');
    // บันทึก token นี้ลงในฐานข้อมูลหรือจัดเก็บเพื่อการตรวจสอบ
    user.resetPasswordToken = resetToken; // ต้องเพิ่มฟิลด์นี้ในโมเดลผู้ใช้
    await user.save();

    const resetLink = `http://yourfrontend.com/reset-password?token=${resetToken}`;

    // ตั้งค่าการส่งอีเมล
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tanapat.supasa2559@gmail.com', // แก้ไขเป็นอีเมลจริงของคุณ
        pass: 'ootoom2545', // แก้ไขเป็นรหัสผ่านของคุณ
      },
    });

    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Password Reset Link',
      text: `Click on the link to reset your password: ${resetLink}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Endpoint สำหรับเพิ่มบทความ
app.post('/articles', async (req, res) => {
  const { title, image, date, content } = req.body;

  // ตรวจสอบให้แน่ใจว่าข้อมูลที่จำเป็นถูกส่งมา
  if (!title || !image || !date || !content) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newArticle = new Article({
    title,
    image,
    date,
    content,
  });

  try {
    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle); // ส่งคืนบทความที่ถูกบันทึก
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving article' });
  }
});

// Endpoint สำหรับดึงบทความทั้งหมด
app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles); // ส่งคืนบทความทั้งหมด
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching articles' });
  }
});

// Endpoint สำหรับดึงข้อมูลผู้ใช้ทั้งหมด
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users); // ส่งคืนข้อมูลผู้ใช้ทั้งหมด
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Endpoint สำหรับลบผู้ใช้
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.status(204).send(); // ส่งสถานะ 204 No Content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
});

// Endpoint สำหรับอัปเดตข้อมูลผู้ใช้
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body; // อัปเดตข้อมูลที่ต้องการ

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัสรหัสผ่านก่อนบันทึก
    const updatedUser = await User.findByIdAndUpdate(id, { email, password: hashedPassword }, { new: true });
    res.json(updatedUser); // ส่งคืนผู้ใช้ที่ถูกอัปเดต
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user' });
  }
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
