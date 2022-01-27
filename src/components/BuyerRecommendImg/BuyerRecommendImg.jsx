import React from 'react';
import styles from './BuyerRecommendImg.module.css';

const BuyerRecommendImg = () => {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>구매자 추천 이미지</h2>
      <div className={styles.file}>
        <label htmlFor='file'>+ 이미지 추가</label>
        <input type='file' id='file' accept='image/*' />
      </div>
    </article>
  );
};

export default BuyerRecommendImg;