import React from 'react';
import styles from './UserManagement.module.css';
import Sidebar from './SideBarus';
import UserTable from './UserTable';
import SearchBar from './Searchus';

function UserManagement() {
  return (
    <main className={styles.userManagement}>
      <Sidebar />
      <section className={styles.contentArea}>
        <header className={styles.pageHeader}>
          <h1>จัดการผู้ใช้งาน</h1>
        </header>
        <section className={styles.userListSection}>
          <h2 className={styles.sectionTitle}>รายชื่อผู้ใช้ทั้งหมด</h2>
          <div className={styles.controlsWrapper}>
            <SearchBar />
          </div>
          <UserTable />
        </section>
      </section>
    </main>
  );
}

export default UserManagement;