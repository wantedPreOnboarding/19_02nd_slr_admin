import React from 'react';
import { COLUMNS } from './constants';
import { classNames, isCssUnit, makeClassNameGenerator, paddingClassNameGenerator } from 'utils';
import styles from './Grid.module.scss';
import commonStyles from 'styles/index.module.scss';

const spaceClassNameGenerator = makeClassNameGenerator('space');

const Grid = ({
  className,
  container = false,
  item = true,
  size = 12,
  children,
  style,
  center,
  space,
  pdLevel,
}) => {
  const gridWidth = isCssUnit(size) ? size : (size / COLUMNS) * 100 + '%';

  return (
    <div
      className={classNames(
        className,
        container && styles.gridContainer,
        item && styles.gridItem,
        center && styles.gridCenter,
        space && styles[spaceClassNameGenerator(space)],
        pdLevel && commonStyles[paddingClassNameGenerator(pdLevel)]
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
};
export default Grid;
