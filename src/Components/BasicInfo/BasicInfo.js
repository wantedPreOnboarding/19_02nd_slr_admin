import React from 'react';
import { Table, TableHeader, TableRow } from 'Components';
import styles from './BasicInfo.module.css';

export default function BasicInfo() {
  return (
    <Table>
      <TableHeader>상품 기본 정보</TableHeader>
      <TableRow label="카테고리 *" className={styles.basicInfo}>
        temp value
      </TableRow>
      <TableRow label="카테고리 *" className={styles.basicInfo}>
        temp value
      </TableRow>
      <TableRow>temp value</TableRow>
      <TableRow>temp value</TableRow>
    </Table>
  );
}
