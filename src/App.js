import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import LoginPage from './components/LoginPage'; // ตรวจสอบให้แน่ใจว่าเส้นทางนี้ถูกต้อง
import Dashboard from './components/Dashboard'; // เพิ่มการ import Dashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> {/* เพิ่ม Route สำหรับ Dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
