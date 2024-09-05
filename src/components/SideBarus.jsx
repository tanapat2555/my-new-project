import React from 'react';
import { Link } from 'react-router-dom'; // เพิ่มการ import
import styles from './Sidebarus.module.css';

function Sidebar() {
  const menuItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/99aaa2c9e96e1f60e5bc7979c676460ea607dfcf4bcde45bcbd24f8736155c4b?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4', text: 'แดชบอร์ด', to: '/dashboard', active: false },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b6df197e4965dbbe29017c22ea6d6f5f5412da579cc72a0a6dd74aa973b289eb?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4', text: 'คำถามจากผู้ใช้', to: '/questions', active: false },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a53b4e6194d4c3c841cfb773660436973f808bf3d86b8c7f41293fa8cda16af4?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4', text: 'จัดการบทความ', to: '/article-management', active: false },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bcc21451c0815821f0c99f309467129b86ba2741ce551b67ee0cd8064728e04b?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4', text: 'จัดการผู้ใช้งาน', to: '/user-management', active: true },
  ];

  return (
    <aside className={styles.sidebar}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/465e3889d2ffa6b760bb5a42850fab01d98671a70b9baa0a7e0f03f377b7fea5?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="Logo" className={styles.logo} />
      <div className={styles.userName}>นายธนภัทร สุภาษา</div>
      <nav className={styles.navigation}>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.to} className={`${styles.menuItem} ${item.active ? styles.active : ''}`}>
            <img src={item.icon} alt="" className={styles.menuIcon} />
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
      <button className={styles.logoutButton}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc0df5f026741c291e206c55495f3b96a91bf96ce372c78cf8ea073f3c44991d?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="" className={styles.logoutIcon} />
        <span>ออกจากระบบ</span>
      </button>
    </aside>
  );
}

export default Sidebar;
