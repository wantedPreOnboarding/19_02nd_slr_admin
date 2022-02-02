import React from 'react';
import { classNames, paddingClassNameGenerator } from 'utils';
import { Grid } from 'Components';
import styles from './TableRow.module.scss';
import commonStyles from 'styles/index.module.scss';

const TableRow = ({ className, label, children, pdLevel, center }) => {
  return (
    <>
      {label && (
        <Grid item className={classNames('tableItem', styles.tableLabel)} size={2}>
          {label}
        </Grid>
      )}
      <Grid
        item
        className={classNames(
          'tableItem',
          styles.tableValue,
          className,
          center && styles.center,
          (pdLevel || pdLevel === 0) && commonStyles[paddingClassNameGenerator(pdLevel)]
        )}
        size={label ? 10 : 12}
      >
        {children}
      </Grid>
    </>
  );
};

export default TableRow;
