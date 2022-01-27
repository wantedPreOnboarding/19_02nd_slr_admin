import React from 'react';
import styles from './ProductOption.module.css';
import ProductOptionForm from '../ProductOptionForm/ProductOptionForm';

const ProductOption = () => {
  return (
    <div className={styles.option}>
      <section className={styles.section}>
        <p>상품옵션*</p>
        <button className={styles.addBtn}>
          <i className="fas fa-plus "></i> 옵션 체크 추가
        </button>
      </section>
      <section className={styles.innerSection}>
        <button className={styles.delete}>삭제</button>
        <div>
          <form className={`${styles.form} ${styles.longWidth}`}>
            <button className={styles.addBtn}>
              <label htmlFor="imageInput">
                <i className="fas fa-plus"></i>이미지 첨부
              </label>
            </button>
            <input
              type="file"
              className={styles.imageInput}
              name="imageInput"
              accept="image/*"
            ></input>
          </form>
          <ProductOptionForm />
          <ProductOptionForm addOption="true" />

          <button className={`${styles.addBtn} ${styles.longWidth}`}>
            <i className="fas fa-plus"></i> 옵션 추가
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductOption;
