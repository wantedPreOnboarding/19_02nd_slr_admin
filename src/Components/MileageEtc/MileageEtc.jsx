import React, { useState, useCallback, useEffect } from 'react';
import { Table, TableHeader, TableRow, ToggleBtn } from 'Components';
import styles from 'Components/MileageEtc/MileageEtc.module.css';

const MileageEtc = ({ headTitle, menuTitle }) => {
  const [value, setValue] = useState(false);

  const changeHandler = useCallback(
    state => {
      localStorage.setItem(menuTitle === '마일리지 적립' ? 'mileage' : 'etc', state);
      setValue(state);
    },
    [value]
  );

  useEffect(() => {
    setValue(localStorage.getItem(menuTitle === '마일리지 적립' ? 'mileage' : 'etc'));
  }, []);

  return (
    <Table className={styles.table}>
      <TableHeader className={styles.headTitle}>{headTitle}</TableHeader>
      <TableRow label={menuTitle} className={styles.menuTitle}>
        <ToggleBtn menuTitle={menuTitle} changeHandler={changeHandler} toggleValue={value} />
      </TableRow>
    </Table>
  );
};

export default MileageEtc;
