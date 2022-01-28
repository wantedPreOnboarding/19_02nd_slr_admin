import React from 'react';
import { Table, TableHeader, TableRow } from 'Components';
import styles from 'Components/ProductOption/ProductOption.module.css';
import ProductOptionForm from 'Components/ProductOptionForm/ProductOptionForm';

const ProductOption = () => {
  return (
    <Table className={styles.table}>
      <TableHeader className={styles.headSection}>
        <span>
          상품옵션<span>*</span>
        </span>
        <button className={styles.addBtn}>
          <i className="fas fa-plus "></i> 옵션 체크 추가
        </button>
      </TableHeader>
      <TableRow className={styles.innerTable}>
        <button className={styles.delete}>삭제</button>
        <div className={styles.innerSection}>
          <form className={styles.form}>
            <button className={styles.addBtn}>
              <label htmlFor="imageInput">
                <i className="fas fa-plus"></i>이미지 첨부
              </label>
            </button>
            <input
              type="file"
              className={styles.imageInput}
              name="imageInput"
              id="imageInput"
              accept="image/*"
            ></input>
          </form>
          <ProductOptionForm />
          <ProductOptionForm addOption="true" />

          <button className={`${styles.addBtn} ${styles.longWidth}`}>
            <i className="fas fa-plus"></i> 옵션 추가
          </button>
        </div>
      </TableRow>
    </Table>
  );
};

export default ProductOption;
