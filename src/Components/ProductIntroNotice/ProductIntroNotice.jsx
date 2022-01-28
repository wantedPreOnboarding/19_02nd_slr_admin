import React from 'react';
import { Table, TableHeader, TableRow, TableItem } from 'Components';
import styles from './ProductIntroNotice.module.css';

const ProductIntroNotice = () => {
  return (
    <Table className={styles.table}>
      <TableHeader className={styles.tableHeader}>
        <span>상품 정보 고시</span>
      </TableHeader>
      <TableItem row={1} col={2} size='2' className={styles.tableIntroRow}>
        <span>정보고시</span>
        <button>삭제</button>
      </TableItem>
      <TableRow className={styles.tableIntroRow}>
        <label htmlFor='productWeight'>제품명 / 중량</label>
        <input type='text' placeholder='제품명 / 중량을 입력해주세요.' />
      </TableRow>
      <TableRow className={styles.tableIntroRow}>
        <label htmlFor='productOrigin'>원산지 / 원재료 함량</label>
        <input type='text' placeholder='원산지 / 원재 함량을 입력해주세요.' />
      </TableRow>
      <TableRow className={styles.tableIntroRow}>
        <label htmlFor='productGrade'>등급</label>
        <input type='text' placeholder='등급(근내지방도 수치)를 입력해주세요.' />
      </TableRow>
      <TableRow className={styles.tableIntroRow}>
        <label htmlFor='productKeep'>보관</label>
        <input type='text' placeholder='보관 방식을 입력해주세요' />
      </TableRow>
      <TableRow className={styles.tableIntroRow}>
        <label htmlFor='productType'>식품 유형</label>
        <input type='text' placeholder='식품 유형을 입력해주세요.(ex) 포장육' />
      </TableRow>
      <TableRow className={styles.tableIntroRow}>
        <input type='text' placeholder='항목 제목 자유 입력' />
        <input type='text' placeholder='내용을 입력해주세요' />
        <button type='button'>삭제</button>
      </TableRow>
      <TableRow className={styles.tableIntroRow}>
        <button type='button'>항목추가</button>
      </TableRow>
      <TableRow className={styles.tableIntroRow}>
        <button type='button'>+정보고시 추가</button>
      </TableRow>
    </Table>
  );
};

export default ProductIntroNotice;
