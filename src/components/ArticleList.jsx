import React from 'react';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles, onEdit }) => {
  return (
    <div className={styles.articleList}>
      {articles.map((article) => (
        <div key={article.id} className={styles.articleItem}>
          <img src={article.image} alt={article.title} className={styles.articleImage} />
          <div className={styles.articleInfo}>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.articleDate}>{article.date}</p>
            <button
              className={styles.editButton}
              onClick={() => onEdit(article.id)}
            >
              แก้ไขบทความ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
