import React from 'react';
import { classNames } from 'utils';
import styles from './MessageBox.module.css';

const MessageBox = ({ children, className }) => {
  return <div className={classNames(styles.messageBox, className)}>{children}</div>;
};

export default MessageBox;
