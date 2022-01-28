import React, { useState } from 'react';
import styles from './CheckBox.module.css';
import commonStyles from 'styles/index.module.css';
import { classNames } from 'utils';
import { ReactComponent as Checked } from './assets/checked.svg';

export default function CategoryBox({ category, checked, onChange, children }) {
  return (
    <li>
      <input
        className={commonStyles.a11yHidden}
        type="checkbox"
        id={category}
        name={category}
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
