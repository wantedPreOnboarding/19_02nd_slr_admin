import React from 'react';
import styles from './ToggleBtn.module.css';
const ToggleBtn = ({ menuTitle }) => {
  return (
    <label htmlFor={menuTitle} className={styles.switchBtn}>
      <input name={`${menuTitle}--${menuTitle}`} id={menuTitle} type="checkbox" />
      <span className={styles.onOffSwitch}></span>
    </label>
  );
};
export default ToggleBtn;
