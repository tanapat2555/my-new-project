import React from 'react';
import styles from './QuestionList.module.css';
import Sidebar from './Sidebar';
import SearchBar from './SearchBar';
import QuestionItem from './QuestionItem';

const QuestionList = () => {
  const questions = [
    {
      id: 1,
      title: 'ผมไม่มีเงินแต่อยากพบหมอ',
      votes: 0,
      date: '28 ก.ค. 2567',
      author: 'รัสมุส ฮอยลุนด์',
      authorId: '007'
    },
    {
      id: 2,
      title: 'ต้องรู้สึกเครียดขนาดไหนถึงพบจิตแพทย์ได้เหรอ ครับ',
      votes: 0,
      date: '24 ก.ค. 2567',
      author: 'รัสมุส ฮอยลุนด์',
      authorId: '007'
    },
    {
      id: 3,
      title: 'ผมมีปัญหากับแฟน',
      votes: 1,
      date: '22 ก.ค. 2567',
      author: 'รัสมุส ฮอยลุนด์',
      authorId: '007'
    }
  ];

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>คำถามจากผู้ใช้</h1>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>คำถามทั้งหมด</h2>
          <SearchBar />
          <section className={styles.questionList}>
            {questions.map((question) => (
              <QuestionItem key={question.id} {...question} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default QuestionList;