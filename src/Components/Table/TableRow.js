import React from 'react';
import { Grid } from 'Components';
import styles from './TableRow.module.css';
import { classNames } from 'utils';

export default function TableRow({ className, label, children }) {
  return (
    <>
      {label && (
        <Grid item className={classNames('tableItem', styles.tableLabel)} xs={2}>
          {label}
        </Grid>
      )}
      <Grid
        item
        className={classNames('tableItem', styles.tableValue, className)}
        xs={label ? 10 : 12}
      >
        {children}
      </Grid>
    </>
  );
}
