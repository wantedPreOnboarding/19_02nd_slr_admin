import React from 'react';
import styles from './ToggleBtn.module.css';
const ToggleBtn = () => {
  return (
    <label for="toggleBtn" class={styles.switchBtn}>
      <input id="toggleBtn" type="checkbox" /> <span class={styles.onOffSwitch}></span>
    </label>
  );
};
export default ToggleBtn;
