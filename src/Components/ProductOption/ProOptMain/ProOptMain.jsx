import React from 'react';
import { Table, TableHeader, ProOptSet } from 'Components';
import styles from 'Components/ProductOption/ProOptMain/ProOptMain.module.css';

const ProOptMain = () => {
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
      <ProOptSet />
    </Table>
  );
};

export default ProOptMain;
