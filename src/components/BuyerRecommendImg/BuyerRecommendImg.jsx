import React from 'react';
import { Table, TableHeader, TableRow } from 'Components';
import styles from './BuyerRecommendImg.module.css';

const BuyerRecommendImg = () => {
  return (
    <Table className={styles.table}>
      <TableHeader className={styles.tableHeader}>
        <span>구매자 추천 이미지</span>
      </TableHeader>
      <TableRow className={styles.tableRowFile}>
        <label htmlFor='file'> + 이미지 추가</label>
        <input type='file' id='file' accept='image/*' />
      </TableRow>
    </Table>
  );
};

export default BuyerRecommendImg;