const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user'); // ตรวจสอบให้แน่ใจว่าใช้ชื่อไฟล์ที่ถูกต้อง
const router = express.Router();

// Route สำหรับการเข้าสู่ระบบ
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // ค้นหาผู้ใช้ในฐานข้อมูล
        const user = await User.findOne({ email });
        
        // หากไม่พบผู้ใช้
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        // เปรียบเทียบรหัสผ่าน
        const isMatch = await bcrypt.compare(password, user.password);
        
        // หากรหัสผ่านไม่ถูกต้อง
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid credentials" });
        }

        // หากเข้าสู่ระบบสำเร็จ
        res.status(200).json({ success: true, message: "Login successful" });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ success: false, message: "An unexpected error occurred" });
    }
});

module.exports = router;
