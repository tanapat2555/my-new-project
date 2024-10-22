const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./models/Article'); // นำเข้าโมเดลบทความ

const app = express();
const PORT = 3002;

// เชื่อมต่อกับ MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// เส้นทางสำหรับดึงบทความทั้งหมด
app.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find(); // ดึงบทความทั้งหมดจาก MongoDB
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles', error });
  }
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
