import React from 'react';
import styles from './SearchBarus.module.css';

function SearchBar() {
  return (
    <form className={styles.searchForm}>
      <div className={styles.inputWrapper}>
        <label htmlFor="searchInput" className={styles.visuallyHidden}>ค้นหา</label>
        <input
          type="text"
          id="searchInput"
          className={styles.searchInput}
          placeholder="ค้นหา"
          aria-label="ค้นหา"
        />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ee0980c60d4c0e090e62b8dd93a194a5c4bed0f3a57de2c9bceea8f490cd61?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="" className={styles.searchIcon} />
      </div>
      <button type="submit" className={styles.searchButton}>ค้นหา</button>
    </form>
  );
}

export default SearchBar;