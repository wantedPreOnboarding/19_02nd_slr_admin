import React from 'react';
import { classNames, paddingClassNameGenerator } from 'utils';
import { Grid } from 'Components';
import styles from './Table.module.scss';
import commonStyles from 'styles/index.module.scss';

const addClassToElement = (() => {
  const _addClassToElement = (element, className) => {
    return React.cloneElement(element, {
      className: classNames(element.props.className, className),
    });
  };

  return (element, className) => {
    if (Array.isArray(element)) {
      return React.Children.map(element, child => _addClassToElement(child, className));
    } else {
      return _addClassToElement(element, className);
    }
  };
})();

const Table = ({ className, children, pdLevel }) => {
  const stylishedChildren = pdLevel
    ? addClassToElement(children, commonStyles[paddingClassNameGenerator(pdLevel)])
    : children;
  return (
    <Grid container className={classNames(className, styles.table)}>
      {stylishedChildren}
    </Grid>
  );
};
export default Table;
