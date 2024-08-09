import React from 'react';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <main className={styles.loginPage}>
      <header className={styles.header}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/df0d012582f9dc494f5a84384a3f8a35003259ee83ca73cc8dd553754d0426ce?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="Company Logo" className={styles.logo} />
      </header>
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.loginColumn}>
            <form className={styles.loginForm}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d636757637384af982e06ead4b155437e52388ebf4bfe98db9c3ac448745fde?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="Login Form Logo" className={styles.formLogo} />
              <h1 className={styles.loginTitle}>เข้าสู่ระบบ</h1>
              <div className={styles.formFields}>
                <div className={styles.inputWrapper}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/99e6f1bbf7d3f5ced279ee7d9ed587be2fb881d0e74b9081f52e3f87d1dd23aa?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="" className={styles.inputIcon} />
                  <label htmlFor="email" className={styles['visually-hidden']}>อีเมล</label>
                  <input id="email" type="email" className={styles.inputField} placeholder="อีเมล" />
                </div>
                <div className={styles.passwordInputWrapper}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/92be5fbc7c11872dc5814250b8e0b44f1106bbec3d5e02449511b9f6045a0e19?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="" className={styles.passwordIcon} />
                  <label htmlFor="password" className={styles['visually-hidden']}>รหัสผ่าน</label>
                  <input id="password" type="password" className={styles.inputField} placeholder="รหัสผ่าน" />
                </div>
                <a href="#" className={styles.forgotPassword}>ลืมรหัสผ่าน</a>
                <button type="submit" className={styles.loginButton}>เข้าสู่ระบบ</button>
              </div>
            </form>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac5e754e91cf83558e9b7d6fd5944c55618d1f2f1c6a6ac2107dd07499d53cd9?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="Decorative side image" className={styles.sideImage} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;