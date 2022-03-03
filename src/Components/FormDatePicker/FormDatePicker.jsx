import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './FormDatePicker.module.css';

const FormDatePicker = ({ changeHandler, name, dateType }) => {
  const YYYYMMDD_HHMM = '  yyyy.MM.dd HH:mm';
  const YYYYMMDD = '  yyyy.MM.dd';

  const [isDate, setIsDate] = useState(null);

  return (
    <>
      <div className={dateType === 'time' ? styles.datePickerWrapper : styles.miniWrapper}>
        <DatePicker
          className={dateType === 'time' ? styles.selectDate : styles.selectDateMini}
          selected={isDate}
          dateFormat={dateType === 'time' ? YYYYMMDD_HHMM : YYYYMMDD}
          placeholderText={dateType === 'time' ? YYYYMMDD_HHMM : YYYYMMDD}
          showTimeInput={dateType === 'time' ? true : false}
          name={`${name}-date`}
          onChange={date => {
            setIsDate(date);
            changeHandler(date);
          }}
          autoComplete="off"
        />
        <span className={styles.i}>
          <i className="fas fa-chevron-down" />
        </span>
      </div>
    </>
  );
};

export default FormDatePicker;
