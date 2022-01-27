import React from 'react';
import styles from './Grid.module.css';
import { COLUMNS } from './constants';
import { classNames, isCssUnit } from 'utils';

export default function Grid({ className, container = false, size, item = true, children }) {
  const gridWidth = isCssUnit(size) ? size : (size / COLUMNS) * 100 + '%';

  return (
    <div
      className={classNames(container ? styles.gridContainer : styles.gridItem, className)}
      {...{
        style: size && {
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
