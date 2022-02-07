import React from 'react';
import erroIconSrc from './assets/errorIcon.png';
import { classNames } from 'utils';
import styles from './MessageBox.module.css';

const MessageBox = ({ children, className }) => {
  return (
    <div className={classNames(styles.messageBox, className)}>
      <img src={erroIconSrc} alt="error" />
      {children}
    </div>
  );
};

export default MessageBox;
