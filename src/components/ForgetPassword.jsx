import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert"; 
import styles from './ForgetPassword.module.css';

function ForgetPassword() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const email = document.getElementById("email").value;
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
    
      swal("Error", "กรุณากรอกอีเมลในรูปแบบที่ถูกต้อง", "error");
    } else {
      
      swal("Success", "ลิงก์รีเซ็ตรหัสผ่านถูกส่งไปยังอีเมลของคุณ", "success");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae63597bea387f2db3351b984f4c32064b659ba5051e9194928ea9f094e373f9?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4"
          alt="Company Logo"
          className={styles.logo}
        />
      </header>
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <section className={styles.loginLeftSection}>
              <div className={styles.loginForm}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa37d23efa7ecd221b9ec4d23d5dbc16196d8305e349394c9d1b54eb45f55ed5?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4"
                  alt="Form Logo"
                  className={styles.formLogo}
                />
                <h1 className={styles.formTitle}>เข้าสู่ระบบ</h1>
                <form className={styles.formContent} onSubmit={handleSubmit}>
                  <div className={styles.inputWrapper}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/99e6f1bbf7d3f5ced279ee7d9ed587be2fb881d0e74b9081f52e3f87d1dd23aa?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4"
                      alt=""
                      className={styles.inputIcon}
                    />
                    <label htmlFor="email" className={styles['visually-hidden']}>อีเมล</label>
                    <input
                      type="email"
                      id="email"
                      className={styles.emailInput}
                      placeholder="อีเมล"
                    />
                  </div>
                  <p className={styles.formDescription}>
                    ป้อนที่อยู่อีเมลที่เชื่อมโยงกับบัญชีของคุณแล้วเราจะส่งลิงก์ <br /> เพื่อรีเซ็ตรหัสผ่านไปให้คุณ
                  </p>
                  <Link to="/login" className={styles.loginLink}>กลับหน้าเข้าสู่ระบบ</Link>
                  <button type="submit" className={styles.submitButton}>ส่งอีเมล</button>
                </form>
              </div>
            </section>
          </div>
          <div className={styles.rightColumn}>
            <aside className={styles.loginRightSection}>
              <div className={styles.imageWrapper}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ab76448d6ba87b7b2e98c077408fc7ba7faf97038c1a67e2bded81133b10a88?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4"
                  alt="Decorative right side image"
                  className={styles.rightImage}
                />
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ForgetPassword;
