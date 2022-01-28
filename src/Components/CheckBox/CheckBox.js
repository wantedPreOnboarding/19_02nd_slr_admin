import React, { useState } from 'react';
import styles from './CheckBox.module.css';
import { classNames } from 'utils';
import { ReactComponent as Checked } from './assets/checked.svg';

export default function CheckBox({ category, checked }) {
  const [isChecked, setIsChecked] = useState(checked);
  return (
    <li>
      <input
        type="checkbox"
        id={category}
        name={category}
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <label className={classNames(styles.label, isChecked && styles.checked)} htmlFor={category}>
        &#123;&#123;{category}&#125;&#125;
        <Checked />
      </label>
    </li>
  );
}
