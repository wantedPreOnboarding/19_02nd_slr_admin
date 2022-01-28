import React from 'react';
import { PERIOD_SELECT } from './PeriodData';
import ExposePeriodForm from './ExposePeriodForm';
import styles from './ExposePeriod.module.css';

import { Table, TableHeader, TableRow } from 'Components';

const ExposePeriod = () => {
  return (
    <Table className="">
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
