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
  ProductResistor,
  MileageEtc,
  Nav,
  SubmitForm,
} from 'Components';

import styles from './App.module.css';

const App = () => {
  console.log('test');
  return (
    <Grid container>
      <Grid className={styles.menu} item>
        <Nav />
      </Grid>
      <Grid className={styles.gridContents} item size={10}>
        <main className={styles.main}>
          <SubmitForm>
            <ProductResistor />
            <Grid container center space={20}>
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
                <ProductIntroImg />
              </Grid>
              <Grid item>
                <BuyerRecommendImg />
              </Grid>
              <Grid item>
                <ProductIntroNotice />
              </Grid>
              <Grid item>
                <ProductDelivery />
              </Grid>
              <Grid item>
                <MileageEtc menuTitle="mileage" />
              </Grid>
              <Grid item>
                <MileageEtc menuTitle="etc" />
              </Grid>
            </Grid>
          </SubmitForm>
        </main>
      </Grid>
    </Grid>
  );
};

export default App;
