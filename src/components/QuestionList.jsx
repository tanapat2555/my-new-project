import React, { useState } from 'react';
import styles from './QuestionList.module.css';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import QuestionItem from './QuestionItem';

const QuestionList = () => {
  const [questions] = useState([
    {
      id: 1,
      title: 'ผมไม่มีเงินแต่อยากพบหมอ',
      likes: 0,
      date: '28 ก.ค. 2567',
      author: 'มีน ',
      authorId: ''
    },
    {
      id: 2,
      title: 'ต้องรู้สึกเครียดขนาดไหนถึงพบจิตแพทย์ได้เหรอ ครับ',
      likes: 0,
      date: '24 ก.ค. 2567',
      author: 'กาย',
      authorId: ''
    },
    {
      id: 3,
      title: 'ผมมีปัญหากับแฟน',
      likes: 1,
      date: '22 ก.ค. 2567',
      author: 'ภูผา',
      authorId: ''
    }
  ]);

  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  // ฟังก์ชันสำหรับค้นหา
  const handleSearch = (query) => {
    if (!query) {
      setFilteredQuestions(questions);
      return;
    }

    const lowerCaseQuery = query.toLowerCase();
    const result = questions.filter((question) =>
      question.title.toLowerCase().includes(lowerCaseQuery) ||
      question.author.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredQuestions(result);
  };

  return (
    <div className={styles.container}>
      <Sidebar activeTab="questions" /> {/* ส่งค่า activeTab */}
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>คำถามจากผู้ใช้</h1>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>คำถามทั้งหมด</h2>
          <SearchBar onSearch={handleSearch} />
          <section className={styles.questionList}>
            {filteredQuestions.map((question) => (
              <QuestionItem key={question.id} {...question} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default QuestionList;
