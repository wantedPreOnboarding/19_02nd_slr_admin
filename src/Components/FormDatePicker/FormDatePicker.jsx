import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FormDatePicker.module.css";

const FormDatePicker = ({changeHandler}) => {
  const [isDate, setIsDate] = useState(null);
  const [message, setMessage] = useState(false);
  
  return (
    <>
    <div className={styles.datePickerWrapper}>

      <label className={styles.label}>
      <DatePicker 
      className={styles.selectDate}
      selected={ isDate }
      showTimeSelect
      dateFormat="yyyy.MM.dd HH:mm"
      placeholderText="YYYY.MM.DD YY:MM"
      timeInputLabel="Time:"
      onChange={(date) => {
        setIsDate(date)
        changeHandler(date)
      }} 
      />
      <span className={styles.i}>
        <i class="fas fa-chevron-down" />
      </span>
    </label>

    </div>

    
    </>
  );
};

export default FormDatePicker;