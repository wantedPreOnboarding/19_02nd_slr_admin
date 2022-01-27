import React, { useState, useEffect, useCallback } from 'react';
import {PERIOD_SELECT} from 'Components/SetPeriod/PeriodData';
import styles from 'styles/SetSalesPeriod.module.css';

const SetPeriod = (props) => {
    const PROPS_NAME = props.name;

    const [period, setPeriod] = useState('unlimit');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSelect = useCallback((event) => {
        const {target} = event
        switch (target.name) {
            case 'radioButton':
                setPeriod(target.value);
                break;
            case 'startDate':
                // console.log('startDate', target.value);
                setStartDate(target.value);
                break;
            case 'endDate':
                // console.log('endDate', target.value);
                setEndDate(target.value);
                break;
            default:
                console.error('Select 오류가 발생했습니다.')
                break;
        }
    },[endDate, startDate, period]);
    // useEffect(() => {
    //     console.log('salesPeriod', salesPeriod);
    //     console.log('salesStartDate', salesStartDate);
    //     console.log('salesEndDate', salesEndDate);
    // }, [salesEndDate, salesStartDate, salesPeriod])

    return(
        <>
        <div>
            <form>
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
                                    {data.id > 1 && (PROPS_NAME === 'export' ? '노출' : '판매')}
                                </label>
                            </li>
                        ))
                    }
                    <li className={styles.li}>
                        <input 
                            className={styles.inputTime} 
                            type="datetime-local" 
                            name="startDate" 
                            onChange={handleSelect}
                        />
                        <span> ~ </span>
                        <input 
                            className={styles.inputTime} 
                            type="datetime-local" 
                            name="endDate" 
                            onChange={handleSelect}
                        />
                    </li>
                </ul>
            </form>
        </div>
        </>
    );
};

export default SetPeriod;