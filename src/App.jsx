import React from 'react';
import { BasicInfo, Grid } from 'Components';
import styles from './App.module.css';
import { classNames } from 'utils';

const App = () => {
  return (
    <main className={styles.main}>
      <Grid container center>
        <Grid className={styles.menu} item>
          <nav>
            <ul>
              <li>Menu Area</li>
            </ul>
          </nav>
        </Grid>
        <Grid className={classNames(styles.gridContents)} container center>
          <Grid item>
            <BasicInfo />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default App;