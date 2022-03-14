import React from 'react';
import { classNames } from 'utils';
import { ReactComponent as Checked } from './assets/checked.svg';
import styles from './CheckBox.module.css';
import commonStyles from 'styles/index.module.scss';

const CheckBox = ({ id, checked, onChange, children, name, value }) => {
  return (
    <li>
      <input
        className={commonStyles.a11yHidden}
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={() => {
          onChange?.();
        }}
      />
      <label className={classNames(styles.label, checked && styles.checked)} htmlFor={id}>
        {children}
        <Checked />
      </label>
    </li>
  );
};

export default React.memo(CheckBox);
