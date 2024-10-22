import React, { useEffect, useState } from 'react';
import styles from './UserTable.module.css';
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3002/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    // แสดง SweetAlert2 เพื่อยืนยันการลบ
    const result = await Swal.fire({
      title: 'คุณแน่ใจหรือไม่?',
      text: "คุณต้องการลบผู้ใช้นี้หรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'ใช่, ลบ!',
      cancelButtonText: 'ยกเลิก'
    });

    // ถ้าผู้ใช้ยืนยันการลบ
    if (result.isConfirmed) {
      try {
        await fetch(`http://localhost:3002/users/${id}`, { method: 'DELETE' });
        setUsers(users.filter(user => user._id !== id)); // อัปเดตรายการผู้ใช้ใน state
        Swal.fire(
          'Deleted!',
          'ผู้ใช้ถูกลบเรียบร้อยแล้ว.',
          'success'
        );
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire(
          'Error!',
          'เกิดข้อผิดพลาดในการลบผู้ใช้.',
          'error'
        );
      }
    }
  };

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>ผู้ใช้</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>ไม่พบผู้ใช้</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDelete(user._id)} className={styles.deleteButton}>
                    ลบ
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
