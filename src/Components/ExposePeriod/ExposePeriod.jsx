import React from 'react';
import { Table, TableHeader, TableRow } from 'Components';
import ExposePeriodForm from './ExposePeriodForm';
import { PERIOD_SELECT } from './PeriodData';
import styles from './ExposePeriod.module.scss';

const ExposePeriod = () => {
  return (
    <Table className={styles.table}>
      <TableHeader>노출 및 판매기간 설정</TableHeader>
      <TableRow label="상품 노출 기한" className={styles.ExposePeriod}>
        <ExposePeriodForm name="expose" />
      </TableRow>
      <TableRow label="상품 판매 기한" className={styles.ExposePeriod}>
        <ExposePeriodForm name="sales" />
      </TableRow>
    </Table>
  );
};

export default ExposePeriod;