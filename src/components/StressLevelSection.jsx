import React from 'react';
import styles from './Dashboard.module.css';

function StressLevelSection() {
  return (
    <section className={styles.stressLevelSection}>
      <div className={styles.chartWrapper}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5742edf0af0b18d94be86c7e846ecd6347af19350b584fa829269a0f136aa84c?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="Stress level chart" className={styles.stressChart} />
      </div>
      <div className={styles.stressLevelCard}>
        <h3 className={styles.cardTitle}>ระดับความเครียดของผู้ใช้ในสัปดาห์นี้</h3>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cbc325327cd3bdd8278585aa7d39a265adf13c94e4654c36312fc0fa53f7cc6?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="Stress level indicator" className={styles.stressIndicator} />
      </div>
    </section>
  );
}

export default StressLevelSection;