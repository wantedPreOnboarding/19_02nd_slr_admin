import React from 'react';
import { BasicInfo, Grid } from 'Components';
import styles from './App.module.css';
import { classNames } from 'utils';

const App = () => {
  return (
    <main className={styles.main}>
      <Grid className={styles.gridCenter} container>
        <Grid className={styles.menu} item>
          <nav>
            <ul>
              <li>Menu Area</li>
            </ul>
          </nav>
        </Grid>
        <Grid className={classNames(styles.gridCenter, styles.gridContents)} container>
          <Grid item>
            <BasicInfo />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default App;
