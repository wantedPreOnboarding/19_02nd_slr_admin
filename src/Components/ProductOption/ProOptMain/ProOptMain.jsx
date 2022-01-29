import React, { useState } from 'react';
import { Table, TableHeader, ProOptSet } from 'Components';
import styles from 'Components/ProductOption/ProOptMain/ProOptMain.module.css';

const ProOptMain = () => {
  const [optionNum, setOptionNum] = useState(0);
  const [optionSet, setOptionSet] = useState('');

  const addOptionSet = () => {
    setOptionNum(optionNum + 1);
    setOptionSet([...optionSet, optionNum + 1]);
  };

  const delOptionSet = id => {
    setOptionNum(optionNum - 1);
    setOptionSet(optionSet.filter(i => i !== id));
  };
  return (
    <Table className={styles.table}>
      <TableHeader className={styles.headSection}>
        <span>
          상품옵션<span>*</span>
        </span>
        <button type="button" className={styles.addBtn} onClick={addOptionSet}>
          <i className="fas fa-plus "></i> 옵션 세트 추가
        </button>
      </TableHeader>
      {optionSet &&
        optionSet.map(a => {
          return <ProOptSet key={a} setId={a} delOptionSet={delOptionSet} />;
        })}
    </Table>
  );
};

export default ProOptMain;
