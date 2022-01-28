import React from 'react';
import { classNames } from 'utils';
import { BasicInfo, Grid, ProductOption } from 'Components';
import styles from './App.module.css';
import ProductIntroImg from './Components/ProductIntroImg/ProductIntroImg';
import BuyerRecommendImg from './Components/BuyerRecommendImg/BuyerRecommendImg';

const App = () => {
  return (
    <main className={styles.main}>
      {/* conaiter */}
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
          <Grid item>
            <ProductOption />
          </Grid>
          <Grid item container>
            <ProductIntroImg />
          </Grid>
          <Grid item container>
            <BuyerRecommendImg />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default App;