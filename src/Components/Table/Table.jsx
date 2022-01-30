import React from 'react';
import { classNames } from 'utils';
import { Grid } from 'Components';
import styles from './Table.module.scss';

const Table = ({ className, children, pdLevel }) => {
  return (
    <Grid container className={classNames(className, styles.table, `pd${pdLevel}`)}>
      {children}
    </Grid>
  );
}
export default Table;
