import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './Dashboard.module.css';

function MenuBar({ activeTab }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'ต้องการออกจากระบบหรือไม่?',
      text: "คุณจะไม่สามารถย้อนกลับไปยังหน้านี้ได้!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ใช่, ออกจากระบบ!',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login');
      }
    });
  };

  const handleQuestionsClick = () => {
    navigate('/questions');
  };

  const handleDashboardClick = () => {
    navigate('/dashboard');
  };

  const handleArticleManagementClick = () => {
    navigate('/article-management');
  };

  const handleUserManagementClick = () => {
    navigate('/user-management');
  };

  return (
    <nav className={styles.menuBar}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a357dd7cab04c398bf8fa13ff639e35dedc5b39314a2c5a9e76912a441c54a9?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="User avatar" className={styles.avatar} />
      <p className={styles.userName}>นาย ธนภัทร สุภาษา</p>
      <ul className={styles.menuList}>
        <MenuItem 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/99aaa2c9e96e1f60e5bc7979c676460ea607dfcf4bcde45bcbd24f8736155c4b?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" 
          text="แดชบอร์ด" 
          onClick={handleDashboardClick} 
          active={activeTab === 'dashboard'}
        />
        <MenuItem 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b6df197e4965dbbe29017c22ea6d6f5f5412da579cc72a0a6dd74aa973b289eb?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" 
          text="คำถามจากผู้ใช้" 
          onClick={handleQuestionsClick} 
          active={activeTab === 'questions'}
        />
        <MenuItem 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a53b4e6194d4c3c841cfb773660436973f808bf3d86b8c7f41293fa8cda16af4?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" 
          text="จัดการบทความ" 
          onClick={handleArticleManagementClick} 
          active={activeTab === 'article-management'}
        />
        <MenuItem 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bcc21451c0815821f0c99f309467129b86ba2741ce551b67ee0cd8064728e04b?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" 
          text="จัดการผู้ใช้งาน" 
          onClick={handleUserManagementClick} 
          active={activeTab === 'user-management'}
        />
      </ul>
      <button className={styles.logoutButton} onClick={handleLogout}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc0df5f026741c291e206c55495f3b96a91bf96ce372c78cf8ea073f3c44991d?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="" className={styles.logoutIcon} />
        ออกจากระบบ
      </button>
    </nav>
  );
}

function MenuItem({ icon, text, active, onClick }) {
  return (
    <li className={`${styles.menuItem} ${active ? styles.active : ''}`} onClick={onClick}>
      <img src={icon} alt="" className={styles.menuIcon} />
      <span>{text}</span>
    </li>
  );
}

export default MenuBar;
