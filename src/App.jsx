import React from 'react';
import { BasicInfo, Grid } from 'Components';
import styles from './App.module.css';

const MenuWidth = 300;

const App = () => {
  return (
    <main className={styles.main}>
      <Grid container>
        <Grid item size={`${MenuWidth}px`}>
          Menu
        </Grid>
        <Grid container size={`calc(100% - ${MenuWidth}px)`}>
          <Grid item>
            <BasicInfo />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default App;
