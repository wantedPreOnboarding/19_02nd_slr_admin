import React, { useState, useEffect, useCallback } from 'react';
import {PERIOD_SELECT} from 'Components/ExposePeriod/PeriodData';
import styles from 'Components/ExposePeriod/ExposePeriod.module.css';

const ExposePeriodForm = ({name}) => {
    const PROPS_NAME = name;
    console.log('name',name);


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

    useEffect(() => {
        console.log(PROPS_NAME,'period', period);
        console.log(PROPS_NAME,'startDate', startDate);
        console.log(PROPS_NAME,'endDate', endDate);
    }, [endDate, startDate, period])

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
                                    {data.id > 1 && (PROPS_NAME === 'expose' ? '노출' : '판매')}
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

export default ExposePeriodForm;