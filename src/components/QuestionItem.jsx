import React from 'react';
import styles from './QuestionList.module.css';

const QuestionItem = ({ title, votes, date, author, authorId }) => {
  return (
    <article className={styles.questionItem}>
      <div className={styles.questionTitle}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bca78e4a69ef35eedee7fa19ab7446b00dfd4a57a098efa7e4fc9fab27676f73?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&" alt="" className={styles.questionIcon} />
        <h3>{title}</h3>
      </div>
      <div className={styles.questionMeta}>
        <div className={styles.voteCount}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ede8a074fcec1469c4fea9063e9f76fde17c8a6bb318801a7e285f488f181e80?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&" alt="" className={styles.voteIcon} />
          <span>{votes}</span>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c0582f1cc105550a51d1ed7ed5c2f0742e4151850a310a42b79c2b78da3e7c5?apiKey=ec4f7db0a41840d7ad765c9cf4dfdec4&" alt="Comment icon" className={styles.commentIcon} />
      </div>
      <div className={styles.questionInfo}>
        <div className={styles.postDetails}>
          <span>โพสต์เมื่อ {date}</span>
          <span>{author}</span>
        </div>
        <div className={styles.authorId}>{authorId}</div>
      </div>
    </article>
  );
};

export default QuestionItem;