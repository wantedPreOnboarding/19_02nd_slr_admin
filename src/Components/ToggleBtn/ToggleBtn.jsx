import React from 'react';
import styles from './ToggleBtn.module.css';
const ToggleBtn = ({ menuTitle, changeHandler }) => {
  return (
    <label htmlFor={menuTitle} className={styles.switchBtn}>
      <input id={menuTitle} type="checkbox" onChange={e => changeHandler(e.target.checked)} />
      <span className={styles.onOffSwitch}></span>
    </label>
  );
};
export default ToggleBtn;
