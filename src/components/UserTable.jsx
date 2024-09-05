import React from 'react';
import styles from './UserTable.module.css';

function UserTable() {
  const users = [
    { id: '0001', email: 'ChaiAir@Kmail.com', firstName: 'นคร', lastName: 'ชัยแอร์', gender: 'ชาย', birthDate: '1/8/2024' },
    { id: '0002', email: 'Central@Fmail.com', firstName: 'เซนทัล', lastName: 'โคราด', gender: 'หญิง', birthDate: '6/3/2503' },
    { id: '0003', email: 'BooyBin@Tmail.com', firstName: 'โบย', lastName: 'บิน', gender: 'ชาย', birthDate: '9/9/2999' },
    { id: '0004', email: 'Sunshine@Hotmail.com', firstName: 'LeBrick', lastName: 'James', gender: 'Emale', birthDate: '10/15/2000' },
    { id: '0005', email: 'BWAK@Hotmail.com', firstName: 'Antony', lastName: 'Rashy', gender: 'ชาย', birthDate: '10/13/200' },
    { id: '0006', email: 'TonMai@Hotmail.com', firstName: 'เมสัน', lastName: 'ไม้เขียว', gender: 'หญิง', birthDate: '8/11/1700' },
    { id: '0007', email: 'RiceBaby@Hotmail.com', firstName: 'ดีแคน', lastName: 'ข้าว', gender: 'หญิง', birthDate: '9/5/1555' },
    { id: '0008', email: 'Email@Hotmail.com', firstName: 'อีเมล', lastName: 'ฮอต', gender: 'ชาย', birthDate: '10/15/2000' },
    { id: '0009', email: 'Email@Hotmail.com', firstName: 'แฮรี่', lastName: 'คานี', gender: 'หญิง', birthDate: '10/15/2000' },
    { id: '0010', email: 'ASorloth@Hotmail.com', firstName: 'อเล็กซานเด้อ', lastName: 'โสโลคนไทย', gender: 'ชาย', birthDate: '10/15/2000' },
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