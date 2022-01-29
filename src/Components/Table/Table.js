import React from 'react';
import { Grid } from 'Components';
import styles from './Table.module.scss';
import { classNames } from 'utils';

export default function Table({ className, children, pdLevel }) {
  return (
    <Grid container className={classNames(className, styles.table, `pd${pdLevel}`)}>
      {children}
    </Grid>
  );
}
