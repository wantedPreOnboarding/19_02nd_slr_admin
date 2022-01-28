import React, { useState } from "react";
import DatePicker from "react-datepicker";

const FormDatePicker = ({changeHandler}) => {
  const [isDate, setIsDate] = useState(new Date());

  return (
    <DatePicker selected={isDate} onChange={(date) => {
      setIsDate(date)
      changeHandler(date)
    }} />
  );
};

export default FormDatePicker;