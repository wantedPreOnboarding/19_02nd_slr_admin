import React from 'react';
import {
  BasicInfo,
  Grid,
  ProOptMain,
  ProductIntroImg,
  ProductIntroNotice,
  BuyerRecommendImg,
  ExposePeriod,
  ProductDelivery,
  MileageEtc,
} from 'Components';
import { classNames } from 'utils';
import styles from './App.module.css';
import ProductRegister from 'Components/ProductRegister/ProductRegister';

const App = () => {
  return (
    <main className={styles.main}>
      <ProductRegister> </ProductRegister>
      <Grid container center>
        <Grid className={classNames(styles.gridContents)} container center space={20}>
          <Grid item>
            <ExposePeriod />
          </Grid>
          <Grid item>
            <BasicInfo />
          </Grid>
          <Grid item>
            <ProOptMain />
          </Grid>
          <Grid item>
            <ProductDelivery />
          </Grid>
          <Grid item>
            <ProductIntroImg />
          </Grid>
          <Grid item>
            <BuyerRecommendImg />
          </Grid>
          <Grid item>
            <MileageEtc menuTitle="mileage" />
          </Grid>
          <Grid item>
            <MileageEtc menuTitle="etc" />
          </Grid>
          <Grid item>
            <ProductIntroNotice />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default App;
