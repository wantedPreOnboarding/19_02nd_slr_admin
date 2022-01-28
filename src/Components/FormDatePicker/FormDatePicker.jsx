import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FormDatePicker = ({changeHandler}) => {
  const [isDate, setIsDate] = useState(new Date());

  return (
    <DatePicker 
      selected={isDate} 
      showTimeSelect
      dateFormat="yyyy.MM.dd HH:mm"
      onChange={(date) => {
        setIsDate(date)
        changeHandler(date)
      }} 
    />
  );
};

export default FormDatePicker;