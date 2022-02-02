import React from 'react';
import { classNames, makeClassNameGenerator } from 'utils';
import styles from './Button.module.css';

const typeClassNameGenerator = makeClassNameGenerator('type');

const Button = ({ className, type, children, onClick }) => {
  return (
    <button
      type="button"
      className={classNames(className, styles.button, styles[typeClassNameGenerator(type)])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
