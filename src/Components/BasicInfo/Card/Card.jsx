import React, { forwardRef } from 'react';
import { classNames } from 'utils';
import styles from './Card.module.css';

export default forwardRef(function Card({ onClickHandle, className, children }, ref) {
  return (
    <article ref={ref} onClick={onClickHandle} className={classNames(className, styles.card)}>
      {children}
    </article>
  );
});
