import React from 'react';
import styles from './QuestionList.module.css';

const SearchBar = () => {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchInput}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ee0980c60d4c0e090e62b8dd93a194a5c4bed0f3a57de2c9bceea8f490cd61?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="" className={styles.searchIcon} />
        <label htmlFor="searchInput" className={styles['visually-hidden']}>ค้นหา</label>
        <input type="text" id="searchInput" className={styles.searchText} placeholder="ค้นหา" />
      </div>
      <button type="submit" className={styles.searchButton}>ค้นหา</button>
    </form>
  );
};

export default SearchBar;