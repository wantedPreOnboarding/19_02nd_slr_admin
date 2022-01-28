import React from 'react';
import {PERIOD_SELECT} from './PeriodData';
import ExposePeriodForm from './ExposePeriodForm';
import styles from './ExposePeriod.module.css';

const ExposePeriod = () => {

    return(
        <>
            <ExposePeriodForm name="expose" />
            <ExposePeriodForm name="sales" />
        </>
    );
};

export default ExposePeriod;