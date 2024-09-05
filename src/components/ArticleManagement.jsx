import React, { useState } from 'react';
import styles from './ArticleManagement.module.css';
import MenuBar from './MenuBar';
import SearchBar from './SearchBarMN';
import ArticleList from './ArticleList';

const ArticleManagement = () => {
  const allArticles = [
    {
      image: "https://files.vogue.co.th/uploads/how-to-relieve-stress.jpg",
      title: "10 วิธีผ่อนคลายความเครียด",
      date: "19 ก.ค. 2567  'นายสมพงศ์' ",
    },
    {
      image: "https://wisdommaxcenter.com/upload/at/pictures/pic-1504939011489.jpg",
      title: "การออกกำลังกายเพื่อสุขภาพ",
      date: "20 ก.ค. 2567  'นางฐายิกา'",
    },
    {
      image: "https://topsvita.com/wp-content/uploads/2023/08/what-is-burnout-syndrome-tops-vita-TH.jpg",
      title: "ภาวะหมดไฟในการทำงาน",
      date: "10 ม.ค. 2567  'นายทรงพล'" ,
    }
  ];

  const [articles, setArticles] = useState(allArticles);

  const handleSearch = (query) => {
    const filteredArticles = allArticles.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setArticles(filteredArticles);
  };

  return (
    <main className={styles.articleManagement}>
      <MenuBar />
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>จัดการบทความ</h1>
        <section className={styles.articleSection}>
          <h2 className={styles.sectionTitle}>บทความทั้งหมด</h2>
          <SearchBar onSearch={handleSearch} />
          <button className={styles.createArticleButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f410528e053444ff82c9a2b7df9de82758a3dc8726fd019a3bf68337c85a558?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4"
              alt="Create Article Icon"
              className={styles.createIcon}
            />
            <span>สร้างบทความ</span>
          </button>
          <ArticleList articles={articles} />
        </section>
      </div>
    </main>
  );
};

export default ArticleManagement;