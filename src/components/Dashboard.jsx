import React from 'react';
import styles from './Dashboard.module.css';
import MenuBar from './MenuBar';
import OverviewSection from './OverviewSection';
import StressLevelSection from './StressLevelSection';
import QuestionsSection from './QuestionsSection';
import HighStressUsersSection from './HighStressUsersSection';

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <MenuBar />
      <div className={styles.contentWrapper}>
        <header className={styles.dashboardHeader}>
          <h1>แดชบอร์ด</h1>
        </header>
        <OverviewSection />
        <StressLevelSection />
        <QuestionsSection />
        <HighStressUsersSection />
      </div>
    </main>
  );
}

export default Dashboard; 