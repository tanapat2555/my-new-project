import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import MenuBar from './MenuBar';
import OverviewSection from './OverviewSection';
import StressLevelSection from './StressLevelSection';
import QuestionsSection from './QuestionsSection';
import HighStressUsersSection from './HighStressUsersSection';
import MyChartComponent from './MyChartComponent'; // นำเข้า MyChartComponent

function Dashboard() {
  // สร้างข้อมูลสำหรับ Chart
  const [chartData, setChartData] = useState({
    labels: ['ระดับต่ำ', 'ระดับกลาง', 'ระดับสูง'],
    datasets: [{
      label: 'สัดส่วนระดับความเครียดของผู้ใช้สัปดาห์นี้',
      data: [10, 40, 50],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  });

  return (
    <main className={styles.dashboard}>
      <MenuBar />
      <div className={styles.contentWrapper}>
        <header className={styles.dashboardHeader}>
          <h1>แดชบอร์ด</h1>
        </header>
        <OverviewSection />
        <StressLevelSection />
        {/* เพิ่ม MyChartComponent ที่นี่ */}
        <div className={styles.chartContainer}>
          <MyChartComponent data={chartData} />
        </div>

        {/* แสดงข้อมูลเพิ่มเติมด้านล่างกราฟ */}
        <div className={styles.statsContainer}>
          <h2>ข้อมูลสถิติความเครียด</h2>
          <div className={styles.statsBox}>
            <p>ระดับต่ำ: {chartData.datasets[0].data[0]} คน</p>
            <p>ระดับกลาง: {chartData.datasets[0].data[1]} คน</p>
            <p>ระดับสูง: {chartData.datasets[0].data[2]} คน</p>
          </div>
        </div>
        
        <QuestionsSection />
        <HighStressUsersSection />
      </div>
    </main>
  );
}

export default Dashboard;
