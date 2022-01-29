import React, { useState, useCallback, useEffect } from 'react';
import { Table, TableHeader, TableRow, ToggleBtn } from 'Components';
import styles from 'Components/MileageEtc/MileageEtc.module.css';

const MileageEtc = ({ menuTitle }) => {
  return (
    <Table className={styles.table}>
      <TableHeader>{menuTitle === 'mileage' ? '상품 혜택 허용 설정' : '기타 설정'}</TableHeader>
      <TableRow
        className={styles.menuTitle}
        label={menuTitle === 'mileage' ? '마일리지 적립' : '감사카드 제공'}
      >
        <ToggleBtn menuTitle={menuTitle} />
      </TableRow>
    </Table>
  );
};

export default MileageEtc;