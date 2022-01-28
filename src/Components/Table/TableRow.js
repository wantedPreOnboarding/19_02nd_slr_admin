import React from 'react';
import { Grid } from 'Components';
import styles from './TableRow.module.scss';
import { classNames } from 'utils';

export default function TableRow({ className, label, children, pdLevel, direction }) {
  return (
    <>
      {label && (
        <Grid item className={classNames('tableItem', styles.tableLabel)} size={2}>
          {label}
        </Grid>
      )}
      <Grid
        item
        className={classNames('tableItem', styles.tableValue, className, styles[`pd${pdLevel}`])}
        size={label ? 10 : 12}
      >
        {children}
      </Grid>
    </>
  );
}
