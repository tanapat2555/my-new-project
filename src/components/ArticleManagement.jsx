import React, { useState } from 'react';
import styles from './ArticleManagement.module.css';
import MenuBar from './MenuBar';
import SearchBar from './SearchBarMN';
import ArticleList from './ArticleList';

const ArticleManagement = () => {
  const allArticles = [
    {
      id: 1,
      image: "https://files.vogue.co.th/uploads/how-to-relieve-stress.jpg",
      title: "10 วิธีผ่อนคลายความเครียด",
      date: "19 ก.ค. 2567 'นายสมพงศ์'",
      content: "นี่คือเนื้อหาเกี่ยวกับวิธีผ่อนคลายความเครียด...",
    },
    {
      id: 2,
      image: "https://wisdommaxcenter.com/upload/at/pictures/pic-1504939011489.jpg",
      title: "การออกกำลังกายเพื่อสุขภาพ",
      date: "20 ก.ค. 2567 'นางฐายิกา'",
      content: "นี่คือเนื้อหาเกี่ยวกับการออกกำลังกายเพื่อสุขภาพ...",
    },
    {
      id: 3,
      image: "https://topsvita.com/wp-content/uploads/2023/08/what-is-burnout-syndrome-tops-vita-TH.jpg",
      title: "ภาวะหมดไฟในการทำงาน",
      date: "10 ม.ค. 2567 'นายทรงพล'",
      content: "นี่คือเนื้อหาเกี่ยวกับภาวะหมดไฟในการทำงาน...",
    }
  ];

  const [articles, setArticles] = useState(allArticles);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editContent, setEditContent] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleSearch = (query) => {
    if (query) {
      const filteredArticles = allArticles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setArticles(filteredArticles);
    } else {
      setArticles(allArticles); // หากช่องค้นหาเป็นค่าว่าง ให้แสดงบทความทั้งหมด
    }
  };

  const handleEdit = (id) => {
    const articleToEdit = articles.find(article => article.id === id);
    if (articleToEdit) {
      setEditId(articleToEdit.id);
      setEditTitle(articleToEdit.title);
      setEditDate(articleToEdit.date);
      setEditImage(articleToEdit.image);
      setEditContent(articleToEdit.content);
    }
  };

  const handleSaveEdit = () => {
    const currentDateTime = new Date().toLocaleString();
    const updatedArticles = articles.map(article =>
      article.id === editId
        ? { ...article, title: editTitle, date: currentDateTime, image: editImage, content: editContent }
        : article
    );
    setArticles(updatedArticles);
    setEditId(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNewImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddArticle = () => {
    const currentDateTime = new Date().toLocaleString();
    const newArticle = {
      id: articles.length + 1,
      title: newTitle,
      image: newImage,
      date: currentDateTime,
      content: newContent,
    };
    setArticles([...articles, newArticle]);
    setNewTitle('');
    setNewImage('');
    setNewContent('');
  };

  return (
    <main className={styles.articleManagement}>
      <MenuBar activeTab="article-management" />
      <div className={styles.mainContent}>
        <h1 className={styles.pageTitle}>จัดการบทความ</h1>
        <section className={styles.articleSection}>
          <h2 className={styles.sectionTitle}>บทความทั้งหมด</h2>
          <SearchBar onSearch={handleSearch} />

          <button className={styles.createArticleButton} onClick={() => setEditId('new')}>
            สร้างบทความ
          </button>

          {editId === 'new' && (
            <div className={styles.editForm}>
              <h3>สร้างบทความใหม่</h3>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="ชื่อบทความ"
              />
              <input
                type="file"
                onChange={handleNewImageChange}
              />
              {newImage && (
                <img src={newImage} alt="Preview" className={styles.previewImage} />
              )}
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="เนื้อหาบทความ"
                className={styles.textArea}
              />
              <button onClick={handleAddArticle} className={styles.saveButton}>
                บันทึกบทความ
              </button>
            </div>
          )}

          <ArticleList articles={articles} onEdit={handleEdit} />

          {editId && editId !== 'new' && (
            <div className={styles.editForm}>
              <h3>แก้ไขบทความ</h3>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                placeholder="แก้ไขชื่อบทความ"
              />
              <input
                type="file"
                onChange={handleImageChange}
              />
              {editImage && (
                <img src={editImage} alt="Preview" className={styles.previewImage} />
              )}
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                placeholder="แก้ไขเนื้อหาบทความ"
                className={styles.textArea}
              />
              <button onClick={handleSaveEdit} className={styles.saveButton}>
                บันทึกการแก้ไข
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default ArticleManagement;
