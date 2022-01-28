import React, { useState, useEffect, useCallback } from 'react';
import {PERIOD_SELECT} from 'Components/ExposePeriod/PeriodData';
import ExposePeriodForm from './ExposePeriodForm';
import styles from 'Components/ExposePeriod/ExposePeriod.module.css';

const ExposePeriod = () => {

    return(
        <>
            <ExposePeriodForm name="expose" />
            <ExposePeriodForm name="sales" />
        </>
    );
};

export default ExposePeriod;