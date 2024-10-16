import React from 'react';
import styles from './UserTable.module.css';

function UserTable() {
  const users = [
    { id: '0001', email: 'admin@Kmail.com', firstName: 'ธนภัทร', lastName: 'สุภาษา', gender: 'ชาย', birthDate: '1/8/2024' },
    { id: '0002', email: 'zeeu@Fmail.com', firstName: 'สันติ', lastName: 'มาไร', gender: 'ชาย', birthDate: '6/3/2503' },
    { id: '0003', email: 'kunnbb@Tmail.com', firstName: 'มีนา', lastName: 'หวังดี', gender: 'หญิง', birthDate: '9/9/2999' },
  ];

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>ผู้ใช้</th>
            <th>Email</th>
            <th>ชื่อจริง</th>
            <th>นามสกุล</th>
            <th>เพศ</th>
            <th>วันเกิด</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.birthDate}</td>
              <td>
                <button className={styles.editButton} aria-label={`Edit user ${user.firstName}`}>
                  edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;