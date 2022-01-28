import React from 'react';
import styles from './ToggleBtn.module.css';
export default function ToggleBtn() {
  return (
    <label class={styles.switchBtn}>
      <input type="checkbox" /> <span class={styles.onOffSwitch}></span>
    </label>
  );
}
