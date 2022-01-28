import React from 'react';
import styles from './ToggleBtn.module.css';
const ToggleBtn = ({ menuTitle }) => {
  return (
    <label for={menuTitle} class={styles.switchBtn}>
      <input id={menuTitle} type="checkbox" /> <span class={styles.onOffSwitch}></span>
    </label>
  );
};
export default ToggleBtn;
