import React, { useState, useCallback, useEffect } from 'react';
import { Table, TableHeader, TableRow, ToggleBtn } from 'Components';
import styles from 'Components/MileageEtc/MileageEtc.module.css';

	@@ -8,9 +8,8 @@ const MileageEtc = ({ headTitle, menuTitle }) => {
  const changeHandler = useCallback(
    state => {
      localStorage.setItem(menuTitle === '마일리지 적립' ? 'mileage' : 'etc', state);
      setValue(state);
    },
    [value]
  );

  useEffect(() => {
	@@ -21,7 +20,7 @@ const MileageEtc = ({ headTitle, menuTitle }) => {
    <Table className={styles.table}>
      <TableHeader className={styles.headTitle}>{headTitle}</TableHeader>
      <TableRow label={menuTitle} className={styles.menuTitle}>
        <ToggleBtn menuTitle={menuTitle} changeHandler={changeHandler} toggleValue={value} />
      </TableRow>
    </Table>
  );
