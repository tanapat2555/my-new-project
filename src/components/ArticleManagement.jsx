import React, { useState, useEffect } from 'react';
import styles from './ArticleManagement.module.css';
import MenuBar from './MenuBar';
import SearchBar from './SearchBarMN';
import ArticleList from './ArticleList';
import axios from 'axios'; // นำเข้า Axios

const ArticleManagement = () => {
  const [articles, setArticles] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editContent, setEditContent] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newContent, setNewContent] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:3002/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setArticles(filteredArticles);
    } else {
      const fetchArticles = async () => {
        try {
          const response = await axios.get('http://localhost:3002/articles');
          setArticles(response.data);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      };
      fetchArticles();
    }
  };

  const handleAddArticle = async () => {
    const newArticle = {
      title: newTitle,
      image: newImage,
      content: newContent,
    };

    try {
      await axios.post('http://localhost:3002/articles', newArticle);
      setNewTitle('');
      setNewImage('');
      setNewContent('');
      const response = await axios.get('http://localhost:3002/articles');
      setArticles(response.data);
    } catch (error) {
      console.error('Error adding article:', error);
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

  const handleEdit = (articleId) => {
    const articleToEdit = articles.find(article => article._id === articleId);
    if (articleToEdit) {
      setEditId(articleId);
      setEditTitle(articleToEdit.title);
      setEditImage(articleToEdit.image);
      setEditContent(articleToEdit.content);
    }
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

  const handleSaveEdit = async () => {
    const updatedArticle = {
      title: editTitle,
      image: editImage,
      content: editContent,
    };

    try {
      await axios.put(`http://localhost:3002/articles/${editId}`, updatedArticle);
      const updatedArticles = articles.map(article =>
        article._id === editId ? updatedArticle : article
      );
      setArticles(updatedArticles);
      setEditId(null);
      setEditTitle('');
      setEditImage('');
      setEditContent('');
    } catch (error) {
      console.error('Error saving edit:', error);
    }
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
