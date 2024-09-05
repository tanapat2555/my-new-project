import React from 'react';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles }) => {
  const handleEdit = (index) => {
    // Handle edit logic here
    console.log("Edit article", index);
  };

  const handleDelete = (index) => {
    // Handle delete logic here
    console.log("Delete article", index);
  };

  return (
    <section className={styles.articleList}>
      {articles.length === 0 ? (
        <p>ไม่มีบทความที่ตรงกับการค้นหา</p>
      ) : (
        articles.map((article, index) => (
          <div key={index} className={styles.articleItem}>
            <img src={article.image} alt={article.title} className={styles.articleImage} />
            <div className={styles.articleItemContent}>
              <h2>{article.title}</h2>
              <p>{article.date}</p>
              <div className={styles.articleActions}>
                <button className={styles.editButton} onClick={() => handleEdit(index)}>แก้ไข</button>
                <button className={styles.deleteButton} onClick={() => handleDelete(index)}>ลบ</button>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default ArticleList;
