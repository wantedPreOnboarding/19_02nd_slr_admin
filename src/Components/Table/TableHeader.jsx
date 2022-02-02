import React from 'react';
import { classNames } from 'utils';
import { Grid } from 'Components';
import styles from './TableHeader.module.css';

const TableHeader = ({ className, children }) => {
  return (
    <Grid item size={12} className={classNames('tableItem', styles.tableHeader, className)}>
      {children}
    </Grid>
  );
}
export default TableHeader;