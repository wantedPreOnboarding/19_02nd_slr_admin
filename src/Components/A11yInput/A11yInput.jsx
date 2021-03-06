import React from 'react';
import { classNames } from 'utils';
import styles from './A11yInput.module.css';
import commonStyles from 'styles/index.module.scss';

const A11yInput = ({
  className,
  id,
  name,
  type,
  label,
  placeholder,
  islabel = true,
  onFocusHandler,
  onBlurHandler,
  onChangeHandler,
  value,
  required,
  autoComplete,
}) => {
  return (
    <>
      {islabel && (
        <label className={classNames(commonStyles.a11yHidden)} htmlFor={id} type={type}>
          {label}
        </label>
      )}
      <input
        className={classNames(className, styles.a11yInput)}
        id={id}
        placeholder={placeholder}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={value}
        name={name}
        required={required}
        autoComplete={autoComplete}
      />
    </>
  );
};
export default A11yInput;
