import React from 'react';
import { classNames } from 'utils';
import styles from './Button.module.css';

export default function Button({ type, children, onClick }) {
  return (
    <button className={classNames(styles.button, styles.type1)} onClick={onClick}>
      {children}
    </button>
  );
}
