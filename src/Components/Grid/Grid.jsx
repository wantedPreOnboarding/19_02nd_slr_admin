import React from 'react';
import styles from './Grid.module.scss';
import { COLUMNS } from './constants';
import { classNames, isCssUnit } from 'utils';

const spaceClassGenerator = num => `space${num}`;

export default function Grid({
  className,
  container = false,
  item = true,
  size = 12,
  children,
  style,
  center,
  space,
}) {
  const gridWidth = isCssUnit(size) ? size : (size / COLUMNS) * 100 + '%';

  return (
    <div
      className={classNames(
        className,
        container && styles.gridContainer,
        item && styles.gridItem,
        center && styles.gridCenter,
        space && styles[spaceClassGenerator(space)]
      )}
      {...{
        style: size && {
          width: gridWidth,
          flexBasis: gridWidth,
          flexGrow: 0,
          ...style,
        },
      }}
    >
      {children}
    </div>
  );
}
