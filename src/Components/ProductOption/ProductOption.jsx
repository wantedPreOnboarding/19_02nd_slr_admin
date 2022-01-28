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
        <button type="button" className={styles.addBtn}>
          <i className="fas fa-plus "></i> 옵션 체크 추가
        </button>
      </TableHeader>
      <TableRow className={styles.innerTable}>
        <button type="button" className={styles.delete}>
          삭제
        </button>

        <div className={styles.innerSection}>
          <ProductOptionForm addOption="image" />
          <ProductOptionForm />
          <ProductOptionForm addOption="add" />
          <button type="button" className={`${styles.addBtn} ${styles.longWidth}`}>
            <i className="fas fa-plus"></i> 옵션 추가
          </button>
        </div>
      </TableRow>
    </Table>
  );
};

export default ProductOption;
