import React from 'react';
import {
  BasicInfo,
  Grid,
  ProductOption,
  ProductIntroImg,
  ProductIntroNotice,
  BuyerRecommendImg,
  ExposePeriod,
  ProductDelivery,
  ToggleBtn,
} from 'Components';
import { classNames } from 'utils';
import styles from './App.module.css';

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
        <Grid className={classNames(styles.gridContents)} container center space={20}>
          <Grid item>
            <ExposePeriod />
          </Grid>
          <Grid item>
            <BasicInfo />
          </Grid>
          <Grid item>
            <ProductOption />
          </Grid>
          <Grid item>
            <ProductDelivery />
          </Grid>
          <Grid item container>
            <ProductIntroImg />
          </Grid>
          <Grid item container>
            <BuyerRecommendImg />
          </Grid>
          <Grid item container>
            <ProductIntroNotice />
          </Grid>
        </Grid>
      </Grid>
      <ToggleBtn />
    </main>
  );
};

export default App;
