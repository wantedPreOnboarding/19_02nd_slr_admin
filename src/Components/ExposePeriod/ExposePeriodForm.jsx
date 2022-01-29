import React, { useState, useEffect, useCallback } from 'react';
import {PERIOD_SELECT} from 'Components/ExposePeriod/PeriodData';
import styles from 'Components/ExposePeriod/ExposePeriod.module.css';
import FormDatePicker from 'Components/FormDatePicker/FormDatePicker';

const ExposePeriodForm = ({name}) => {
    const PROPS_NAME = name;

    const [period, setPeriod] = useState('unlimit');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleSelect = useCallback((event) => {
        setPeriod(event.target.value);
    },[period]);

    const handleStartDate = (date) => {
        setStartDate(date);
    }

    const handleEndDate = (date) => {
        setEndDate(date);
    }

    useEffect(() => {
        endDate < startDate && setPeriod('unexpose');
        startDate < new Date() && setPeriod('unexpose')
    }, [endDate, startDate]);

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
                                    name={`${PROPS_NAME}-radioButton`} 
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
                        <FormDatePicker name="expose" dateType="time" changeHandler={handleStartDate} />
                        <span> ~ </span>
                        <FormDatePicker name="sales" dateType="time" changeHandler={handleEndDate} /> 
                    </li>
                </ul>
            </form>
        </div>
        </>
    );
};

export default ExposePeriodForm;