import React from 'react';
import { Table, TableHeader, TableRow, ToggleBtn } from 'Components';
import Grid from 'Components/Grid/Grid';
import styles from 'Components/MileageEtc/MileageEtc.module.css';
const MileageEtc = ({ headTitle, menuTitle }) => {
  return (
    <Table className={styles.table}>
      <TableHeader className={styles.headTitle}>{headTitle}</TableHeader>
      <TableRow label={menuTitle} className={styles.menuTitle}>
        <ToggleBtn menuTitle={menuTitle} />
      </TableRow>
    </Table>
  );
};

export default MileageEtc;
