import React from 'react';
import { classNames } from 'utils';
import styles from './Button.module.css';

const typeClassGenerator = num => `type${num}`;

const Button = ({ className, type, children, onClick }) => {
  return (
    <button
      type="button"
      className={classNames(className, styles.button, styles[typeClassGenerator(type)])
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
export default Button;