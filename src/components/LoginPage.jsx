import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (!email || !password) {
      swal('Error', 'กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
      return;
    }
  
    fetch('http://localhost:3002/login', { // ตรวจสอบให้แน่ใจว่า URL ถูกต้อง
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }), // ตรวจสอบให้แน่ใจว่าข้อมูลถูกต้อง
    })  
    .then((response) => {
      if (!response.ok) {
        return response.json().then(err => {throw new Error(err.message || 'Unknown error')});
      }
      return response.json();
    })
    .then((data) => {
      if (data.success) {
        swal('Success', 'Login successful!', 'success').then(() => {
          navigate('/dashboard'); 
        });
      } else {
        swal('Error', data.message, 'error');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      swal('Error', 'An unexpected error occurred: ' + error.message, 'error');
    });
  };

  return (
    <main className={styles.loginPage}>
      <header className={styles.header}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/df0d012582f9dc494f5a84384a3f8a35003259ee83ca73cc8dd553754d0426ce?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4"
          alt="Logo"
          className={styles.logo}
        />
      </header>
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.loginColumn}>
            <form className={styles.loginForm} onSubmit={handleLogin}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/df0d012582f9dc494f5a84384a3f8a35003259ee83ca73cc8dd553754d0426ce?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4"
                alt="Form Logo"
                className={styles.formLogo}
              />
              <h1 className={styles.loginTitle}>เข้าสู่ระบบ</h1>
              <div className={styles.formFields}>
                <div className={styles.inputWrapper}>
                  <label htmlFor="email" className={styles['visually-hidden']}>อีเมล</label>
                  <input
                    id="email"
                    type="email"
                    className={styles.inputField}
                    placeholder="อีเมล"
                  />
                </div>
                <div className={styles.inputWrapper}>
                  <label htmlFor="password" className={styles['visually-hidden']}>รหัสผ่าน</label>
                  <input
                    id="password"
                    type="password"
                    className={styles.inputField}
                    placeholder="รหัสผ่าน"
                  />
                </div>
                <a href="/forget-password" className={styles.forgotPassword}>ลืมรหัสผ่าน?</a>
                <button type="submit" className={styles.loginButton}>เข้าสู่ระบบ</button>
              </div>
            </form>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac5e754e91cf83558e9b7d6fd5944c55618d1f2f1c6a6ac2107dd07499d53cd9?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4"
                alt="Side Image"
                className={styles.sideImage}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
