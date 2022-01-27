import React from 'react';
import { Grid } from 'Components';
import styles from './Table.module.css';
import { classNames } from 'utils';

export default function Table({ className, children }) {
  console.log(styles);
  return (
    <Grid container className={classNames(className, styles.table)}>
      {children}
    </Grid>
  );
}
