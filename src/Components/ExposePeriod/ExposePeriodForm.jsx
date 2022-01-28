import React, { useState, useEffect, useCallback } from 'react';
import {PERIOD_SELECT} from 'Components/ExposePeriod/PeriodData';
import styles from 'Components/ExposePeriod/ExposePeriod.module.css';
import FormDatePicker from 'Components/FormDatePicker/FormDatePicker';

const ExposePeriodForm = ({name}) => {
    const PROPS_NAME = name;

    const [period, setPeriod] = useState('unlimit');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSelect = useCallback((event) => {
        setPeriod(event.target.value);
    },[period]);

    const handleStartDate = (date) => {
        setStartDate(date);
    }

    const handleEndDate = (date) => {
        setEndDate(date);
    }

    return(
        <>
        <div>
            <form className={styles.form}>
                <ul className={styles.ui}>
                    {
                        PERIOD_SELECT.map((data) => (
                            <li className={styles.li} key={data.id}>
                                <input 
                                    className={styles.select} 
                                    type="radio" 
                                    name="radioButton" 
                                    value={data.name}
                                    checked={period === data.name} 
                                    onChange={handleSelect}
                                />
                                <label 
                                    className={styles.label} 
                                    htmlFor="unlimit
                                ">
                                    {data.title}
                                    {data.id > 1 && (PROPS_NAME === 'expose' ? '노출' : '판매')}
                                </label>
                            </li>
                        ))
                    }
                    <li className={styles.li}>
                        <FormDatePicker changeHandler={handleStartDate} />
                        <span> ~ </span>
                        <FormDatePicker changeHandler={handleStartDate} /> 
                    </li>
                </ul>
            </form>
        </div>
        </>
    );
};

export default ExposePeriodForm;