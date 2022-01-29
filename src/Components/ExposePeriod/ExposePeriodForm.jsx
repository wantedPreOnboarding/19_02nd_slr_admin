import React, { useState, useEffect } from 'react';
import {PERIOD_SELECT} from 'Components/ExposePeriod/PeriodData';
import FormDatePicker from 'Components/FormDatePicker/FormDatePicker';
import styles from 'Components/ExposePeriod/ExposePeriod.module.scss';

const ExposePeriodForm = ({name}) => {
    const PROPS_NAME = name;

    const [period, setPeriod] = useState('unlimit');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleSelect = (event) => {
        setPeriod(event.target.value);
    };

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
        <div className='styles.form'>
                <ul className={styles.ui}>
                    {
                        PERIOD_SELECT.map((data) => (
                            <li className={styles.li} key={data.id}>
                                <label htmlFor="styles">
                                    <input 
                                        className={styles.select} 
                                        type="radio" 
                                        name={`${PROPS_NAME}-radioButton`} 
                                        value={data.name}
                                        checked={period === data.name} 
                                        onChange={handleSelect}
                                        required
                                        />
                                    <span className={styles.ball}></span>
                                </label>
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
        </div>
        </>
    );
};

export default ExposePeriodForm;