import React from 'react';
import styles from './ProductIntroImg.module.css';

const ProductIntroImg = () => {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>상품 소개 이미지</h2>
      <div className={styles.file}>
        <label htmlFor='file'>+ 이미지 추가</label>
        <input type='file' id='file' accept='image/*' />
      </div>
    </article>
  );
};

export default ProductIntroImg;