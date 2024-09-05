import React from 'react';
import styles from './UserTable.css';

const SearchForm = () => (
  <form className={styles['search-form']}>
    <div className={styles['search-input-container']}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ee0980c60d4c0e090e62b8dd93a194a5c4bed0f3a57de2c9bceea8f490cd61?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="" className={styles.img} />
      <label htmlFor="search" className="visually-hidden">
        ค้นหา
      </label>
      <input
        type="text"
        id="search"
        className={styles.label}
        placeholder="ค้นหา"
        aria-label="ค้นหา"
      />
    </div>
    <button type="submit" className={styles['search-button']}>
      ค้นหา
    </button>
  </form>
);

export default SearchForm;