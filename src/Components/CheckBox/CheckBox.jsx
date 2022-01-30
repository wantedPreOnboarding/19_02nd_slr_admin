import React from 'react';
import { classNames } from 'utils';
import { ReactComponent as Checked } from './assets/checked.svg';
import styles from './CheckBox.module.css';
import commonStyles from 'styles/index.module.css';

const CheckBox = ({ category, checked, onChange, children, name }) => {
  return (
    <li>
      <input
        className={commonStyles.a11yHidden}
        type="checkbox"
        id={category}
        name={name}
        checked={checked}
        onChange={() => {
          onChange?.();
        }}
      />
      <label className={classNames(styles.label, checked && styles.checked)} htmlFor={category}>
        {children}
        <Checked />
      </label>
    </li>
  );
}
export default CheckBox;