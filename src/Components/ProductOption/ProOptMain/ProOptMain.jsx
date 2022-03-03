import React, { useState, useContext, useRef, useEffect } from 'react';
import { ErrorContext } from 'context/error';
import { Table, TableHeader, ProOptSet } from 'Components';
import styles from 'Components/ProductOption/ProOptMain/ProOptMain.module.css';
import { MessageBox } from 'Components';
import { classNames } from 'utils';
const ProOptMain = () => {
  const { productOption: error } = useContext(ErrorContext);
  const [optionNum, setOptionNum] = useState(0);
  const [optionSet, setOptionSet] = useState('');

  const optionRef = useRef(null);

  useEffect(() => {
    if (error) optionRef.current.focus();
  }, [error]);

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
      {error && (
        <MessageBox className={classNames(styles.messageBox)}>
          <span>프로덕트 옵션은 필수값입니다.</span>
        </MessageBox>
      )}
      <TableHeader className={styles.headSection}>
        <span>
          상품옵션<span>*</span>
        </span>
        <button ref={optionRef} type="button" className={styles.addBtn} onClick={addOptionSet}>
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
