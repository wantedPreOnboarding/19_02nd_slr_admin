import React, { useState } from 'react';
import styles from './CheckBox.module.css';
import commonStyles from 'styles/index.module.css';
import { classNames, withCurlyBraces } from 'utils';
import { ReactComponent as Checked } from './assets/checked.svg';

export default function CheckBox({ category, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <li>
      <input
        className={commonStyles.a11yHidden}
        type="checkbox"
        id={category}
        name={category}
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          onChange?.();
        }}
      />
      <label className={classNames(styles.label, isChecked && styles.checked)} htmlFor={category}>
        {withCurlyBraces(category)};
        <Checked />
      </label>
    </li>
  );
}
