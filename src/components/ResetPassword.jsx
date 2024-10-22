import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import swal from "sweetalert"; 
import styles from './ResetPassword.module.css';

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token"); // ดึง token จาก query string

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      swal("Error", "กรุณากรอกรหัสผ่าน", "error");
      return;
    }

    if (password !== confirmPassword) {
      swal("Error", "รหัสผ่านไม่ตรงกัน", "error");
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });

      if (response.ok) {
        swal("Success", "รีเซ็ตรหัสผ่านสำเร็จแล้ว", "success");
        navigate("/login"); // นำผู้ใช้กลับไปหน้า login หลังจากรีเซ็ตสำเร็จ
      } else {
        swal("Error", "เกิดข้อผิดพลาดในการรีเซ็ตรหัสผ่าน", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      swal("Error", "เกิดข้อผิดพลาดในการเชื่อมต่อ กรุณาลองอีกครั้ง", "error");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.formTitle}>รีเซ็ตรหัสผ่าน</h1>
        <form className={styles.formContent} onSubmit={handleSubmit}>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">รหัสผ่านใหม่</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              placeholder="รหัสผ่านใหม่"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="confirmPassword">ยืนยันรหัสผ่านใหม่</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.inputField}
              placeholder="ยืนยันรหัสผ่านใหม่"
            />
          </div>
          <button type="submit" className={styles.submitButton}>รีเซ็ตรหัสผ่าน</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
