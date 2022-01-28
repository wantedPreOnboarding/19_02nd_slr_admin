import React from 'react';
import { classNames } from 'utils';
import styles from './TableItem.module.scss';

const TableItem = ({ className, item, size, children, row, col }) => {
  return (
    <div
      className={classNames(className, item && styles.gridItem)}
      style={size && {
        gridRow: row,
        gridColumn: col,
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}>
      {children}
    </div>
  );
}

export default TableItem;
