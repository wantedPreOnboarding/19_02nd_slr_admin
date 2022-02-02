import React from 'react';
import styles from './ProductResistor.module.css';

const ProductResistor = () => {
  return (
    <section className={styles.menuhead}>
      <div className={styles.headInner}></div>
      <div className={styles.headInner}>
        <span className={styles.saveProduct}>상품 등록</span>
        <button className={styles.saveBtn} type="submit">
          저장하기
        </button>
      </div>
    </section>
  );
};

export default ProductResistor;
