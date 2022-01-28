import React from 'react';
import { Table, TableHeader, TableRow } from 'Components';
import styles from 'Components/ProductOption/ProductOption.module.css';
import ProductOptionForm from 'Components/ProductOptionForm/ProductOptionForm';

const ProductOption = () => {
  return (
    <Table className={styles.table}>
      <TableHeader className={styles.headSection}>
        상품옵션*{' '}
        <button className={styles.addBtn}>
          <i className="fas fa-plus "></i> 옵션 체크 추가
        </button>
      </TableHeader>
      <TableRow>
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
      </TableRow>
    </Table>
  );
};

export default ProductOption;
