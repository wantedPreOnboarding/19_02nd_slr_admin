import React, { useState, useEffect, useCallback } from 'react';
import styles from 'styles/SetSalesPeriod.module.css';

const SetSalesPeriod = () => {
    const [salesPeriod, setSalesPeriod] = useState('unlimit');
    const [salesStartDate, setSalesStartDate] = useState('');
    const [salesEndDate, setSalesEndDate] = useState('');

    const handleSelect = useCallback((event) => {
        const {target} = event
        switch (target.name) {
            case 'setSalesPeriod':
                setSalesPeriod(target.value);
                break;
            case 'startDate':
                // console.log('startDate', target.value);
                setSalesStartDate(target.value);
                break;
            case 'endDate':
                // console.log('endDate', target.value);
                setSalesEndDate(target.value);
                break;
            default:
                console.error('Select 오류가 발생했습니다.')
                break;
        }
    },[salesEndDate, salesStartDate, salesPeriod]);

    useEffect(() => {
        console.log('salesPeriod', salesPeriod);
        console.log('salesStartDate', salesStartDate);
        console.log('salesEndDate', salesEndDate);
    }, [salesEndDate, salesStartDate, salesPeriod])

    return(
        <>
        <div>
            <form>
                <ul className={styles.ui}>
                    <li className={styles.li}>
                        <input 
                            className={styles.select} 
                            type="radio" 
                            name="setSalesPeriod" 
                            value="unlimit"
                            onChange={handleSelect} 
                            checked={salesPeriod === 'unlimit'} 
                        />
                        <label className={styles.label} htmlFor="unlimit">제한 없음</label>
                    </li>
                    <li className={styles.li}>
                        <input 
                            className={styles.select} 
                            type="radio" 
                            name="setSalesPeriod" 
                            value="unexposed"
                            onChange={handleSelect} 
                            checked={salesPeriod === 'unexposed'} 
                        />
                        <label className={styles.label} htmlFor="unexposed">미노출</label>
                    </li>
                    <li className={styles.li}>
                        <input 
                            className={styles.select} 
                            type="radio" 
                            name="setSalesPeriod" 
                            value="period"
                            onChange={handleSelect} 
                            checked={salesPeriod === 'period'}
                        />
                        <label className={styles.label} htmlFor="expose-period">노출 기간 설정</label>
                    </li>
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

export default SetSalesPeriod;