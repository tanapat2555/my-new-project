import React from 'react';
import styles from './QuestionList.module.css';

const Sidebar = () => {
  const menuItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/99aaa2c9e96e1f60e5bc7979c676460ea607dfcf4bcde45bcbd24f8736155c4b?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&', text: 'แดชบอร์ด' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b6df197e4965dbbe29017c22ea6d6f5f5412da579cc72a0a6dd74aa973b289eb?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&', text: 'คำถามจากผู้ใช้', active: true },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a53b4e6194d4c3c841cfb773660436973f808bf3d86b8c7f41293fa8cda16af4?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&', text: 'จัดการบทความ' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bcc21451c0815821f0c99f309467129b86ba2741ce551b67ee0cd8064728e04b?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&', text: 'จัดการผู้ใช้งาน' },
  ];

  return (
    <nav className={styles.sidebar}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8da0d37ce11168e4b32b397b35429ee927b2e0b1b1da2e60979a0e977b3e162?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&" alt="Logo" className={styles.logo} />
      <div className={styles.userName}>นายธนภัทร สุภาษา</div>
      {menuItems.map((item, index) => (
        <div key={index} className={`${styles.menuItem} ${item.active ? styles.activeMenuItem : ''}`}>
          <img src={item.icon} alt="" className={styles.menuIcon} />
          <div className={styles.menuText}>{item.text}</div>
        </div>
      ))}
      <button className={styles.logoutButton}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc0df5f026741c291e206c55495f3b96a91bf96ce372c78cf8ea073f3c44991d?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&" alt="" className={styles.logoutIcon} />
        <span>ออกจากระบบ</span>
      </button>
    </nav>
  );
};

export default Sidebar;