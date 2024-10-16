import styles from './ArticleManagement.module.css';
import React, { useState } from 'react';

const SearchBarMN = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันไม่ให้หน้าเว็บรีเฟรช
    onSearch(query); // ส่งค่า query กลับไปยัง ArticleManagement
  };

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchInput}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ee0980c60d4c0e090e62b8dd93a194a5c4bed0f3a57de2c9bceea8f490cd61?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" 
          alt="" 
          className={styles.searchIcon} 
        />
        <label htmlFor="searchInput" className={styles.hidden}></label>
        <input 
          type="text" 
          id="searchInput" 
          className={styles.searchText} 
          placeholder="ค้นหา" 
          value={query} // เชื่อมโยงกับสถานะ
          onChange={(e) => setQuery(e.target.value)} // อัปเดตสถานะเมื่อมีการพิมพ์
        />
      </div>
      <button type="submit" className={styles.searchButton}>ค้นหา</button>
    </form>
  );
};

export default SearchBarMN;

