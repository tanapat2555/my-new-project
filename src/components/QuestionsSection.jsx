import React from 'react';
import styles from './Dashboard.module.css';

function QuestionsSection() {
  const questions = [
    {
      text: 'ผมไม่มีเงินแต่อยากพบหมอ🥺',
      date: '29 มีนาคม 2567',
      author: 'ชอน บุญธรรม',
      replies: 0
    },
    {
      text: 'ต้องรู้สึกเครียดขนาดไหนถึงพบจิตแพทย์ได้เหรอครับ😢',
      date: '20 มกราคม 2567',
      author: 'ธนพล สุภาษา',
      replies: 0
    },
    {
      text: 'ผมมีปัญหากับแฟน😞',
      date: '24 สิงหาคม 2567',
      author: 'โรเบิร์ต ดาวนี่',
      replies: 1
    }
  ];

  return (
    <section className={styles.questionsSection}>
      <div className={styles.repliesCard}>
        <h3 className={styles.cardTitle}>การตอบกลับต่อคำถาม</h3>
        <p className={styles.repliesCount}>1</p>
      </div>
      <div className={styles.latestQuestions}>
        <h3 className={styles.cardTitle}>รายการคำถามล่าสุด</h3>
        <ul className={styles.questionsList}>
          {questions.map((question, index) => (
            <QuestionItem key={index} {...question} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function QuestionItem({ text, date, author, replies }) {
  return (
    <li className={styles.questionItem}>
      <div className={styles.questionContent}>
        <h4 className={styles.questionText}>{text}</h4>
        <p className={styles.questionMeta}>
          โพสต์เมื่อ {date} • {author}
        </p>
      </div>
      <div className={styles.replyCount}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ede8a074fcec1469c4fea9063e9f76fde17c8a6bb318801a7e285f488f181e80?placeholderIfAbsent=true&apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4" alt="" className={styles.replyIcon} />
        <span>{replies}</span>
      </div>
    </li>
  );
}

export default QuestionsSection;
