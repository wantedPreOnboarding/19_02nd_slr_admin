import React from 'react';
import styles from './ToggleBtn.module.css';

const ToggleBtn = ({ menuTitle, toggleValue, changeHandler }) => {
  const toggleChangeHandler = e => {
    menuTitle !== 'mileage' && menuTitle !== 'etc' && changeHandler(e.target.checked);
  };

  return (
    <label htmlFor={menuTitle} className={styles.switchBtn}>
      {toggleValue === 'true' ? (
        <input
          name={`${menuTitle}-${menuTitle}`}
          id={menuTitle}
          type="checkbox"
          checked
          required
          onChange={e => {
            toggleChangeHandler(e);
          }}
        />
      ) : (
        <input
          name={`${menuTitle}-${menuTitle}`}
          id={menuTitle}
          type="checkbox"
          onChange={e => {
            toggleChangeHandler(e);
          }}
        />
      )}
      <span className={styles.onOffSwitch}></span>
    </label>
  );
};
export default ToggleBtn;
