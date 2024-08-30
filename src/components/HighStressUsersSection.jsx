import React from 'react';
import styles from './Dashboard.module.css';

function HighStressUsersSection() {
  return (
    <section className={styles.highStressSection}>
      <h2 className={styles.sectionTitle}>ผู้ใช้ที่มีระดับความเครียดสูง</h2>
      <div className={styles.stressCountCard}>
        <h3 className={styles.cardTitle}>ผู้ใช้ที่มีความเครียดระดับสูง</h3>
        <p className={styles.stressCount}>20</p>
      </div>
      <div className={styles.userGrid}>
        <div className={styles.userCard}>
          <h4 className={styles.userName}>ธนภัทร สุภาษา</h4>
        </div>
        <div className={styles.userCard}></div>
      </div>
    </section>
  );
}

export default HighStressUsersSection;