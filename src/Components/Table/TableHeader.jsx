import React from 'react';
import { Grid } from 'Components';
import styles from './TableHeader.module.css';
import { classNames } from 'utils';

export default function TableHeader({ className, children }) {
  return (
    <Grid item size={12} className={classNames('tableItem', styles.tableHeader, className)}>
      {children}
    </Grid>
  );
}
