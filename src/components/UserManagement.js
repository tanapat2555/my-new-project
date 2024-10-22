// UserManagement.js
import React from 'react';
import Sidebar from './Sidebar'; // นำเข้า Sidebar
import UserTable from './UserTable'; // หากมีการจัดการตารางผู้ใช้งานใน UserTable
import styles from './UserManagement.module.css';

const UserManagement = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar /> {/* แสดง Sidebar */}
            <div className={styles.content}>
                <h2>การจัดการผู้ใช้งาน</h2>
                <UserTable /> {/* ตารางผู้ใช้งาน */}
            </div>
        </div>
    );
}

export default UserManagement;
