import React from 'react';
import styles from './Grid.module.css';
import { COLUMNS } from './constants';

export default function Grid({ container = false, xs, item = true, children }) {
  const gridWidth = (xs / COLUMNS) * 100 + '%';

  return (
    <div
      className={container ? styles.gridContainer : styles.gridItem}
      {...{ style: xs && { width: gridWidth, flexBasis: gridWidth, flexGrow: 0 } }}
    >
      {children}
    </div>
  );
}
