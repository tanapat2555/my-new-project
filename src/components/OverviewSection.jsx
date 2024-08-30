import React from 'react';
import styles from './Dashboard.module.css';

function OverviewSection() {
  const overviewData = [
    { title: 'ผู้ใช้ปัจจุบัน', value: '10', color: 'blue' },
    { title: 'ผู้ใช้ที่ทำแบบทดสอบในสัปดาห์นี้', value: '1', color: 'orange' },
    { title: 'คำถามจากผู้ใช้', value: '3', color: 'white' }
  ];

  return (
    <section className={styles.overviewSection}>
      <h2 className={styles.sectionTitle}>ภาพรวมทั้งหมด</h2>
      <div className={styles.overviewGrid}>
        {overviewData.map((item, index) => (
          <OverviewCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function OverviewCard({ title, value, color }) {
  return (
    <div className={`${styles.overviewCard} ${styles[color]}`}>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardValue}>{value}</p>
    </div>
  );
}

export default OverviewSection;
