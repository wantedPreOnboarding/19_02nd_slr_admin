import React from 'react';
import { TableRow, ProOptForm } from 'Components';
import styles from 'Components/ProductOption/ProOptSet/ProOptSet.module.css';

const ProOptSet = () => {
  return (
    <TableRow className={styles.innerTable}>
      <button type="button" className={styles.delete}>
        삭제
      </button>

      <div className={styles.innerSection}>
        <ProOptForm addOption="image" />
        <ProOptForm />
        <ProOptForm addOption="add" />
        <button type="button" className={`${styles.addBtn} ${styles.longWidth}`}>
          <i className="fas fa-plus"></i> 옵션 추가
        </button>
      </div>
    </TableRow>
  );
};

export default ProOptSet;
