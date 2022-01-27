import React from 'react';
import styles from './Grid.module.css';
import { COLUMNS } from './constants';
import { classNames } from 'utils';

export default function Grid({ className, container = false, xs, item = true, children }) {
  const gridWidth = (xs / COLUMNS) * 100 + '%';
  console.log(classNames(container ? styles.gridContainer : styles.gridItem, className));
  return (
    <div
      className={classNames(container ? styles.gridContainer : styles.gridItem, className)}
      {...{
        style: xs && {
          width: gridWidth,
          flexBasis: gridWidth,
          flexGrow: 0,
        },
      }}
    >
      {children}
    </div>
  );
}
