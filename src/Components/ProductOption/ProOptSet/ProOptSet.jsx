import React, { useState } from 'react';
import { TableRow, ProOptForm } from 'Components';
import styles from 'Components/ProductOption/ProOptSet/ProOptSet.module.css';

const ProOptSet = ({ setId, delOptionSet }) => {
  const [optionNum, setOptionNum] = useState(1);
  const [optionList, setOptionList] = useState([1]);

  const addOption = () => {
    setOptionNum(optionNum + 1);
    setOptionList([...optionList, optionNum + 1]);
  };
  const delOption = id => {
    if (optionNum === 1) {
      delOptionSet(setId);
    } else {
      setOptionNum(optionNum - 1);
      setOptionList(optionList.filter(i => i !== id));
    }
  };

  return (
    <TableRow className={styles.innerTable}>
      <button
        type="button"
        className={styles.delete}
        onClick={() => {
          delOptionSet(setId);
        }}
      >
        삭제
      </button>

      <div className={styles.innerSection}>
        <ProOptForm addOption="image" />

        {optionList &&
          optionList.map(a => {
            return <ProOptForm key={a} id={a} delOption={delOption} />;
          })}

        <button
          type="button"
          className={`${styles.addBtn} ${styles.longWidth}`}
          onClick={addOption}
        >
          <i className="fas fa-plus"></i> 옵션 추가
        </button>
      </div>
    </TableRow>
  );
};

export default ProOptSet;
