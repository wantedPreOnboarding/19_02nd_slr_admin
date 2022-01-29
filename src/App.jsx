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

const App = () => {
  const submitHandler = e => {
    e.preventDefault();
    const temp = {};
    const data = new FormData(e.target);

    for (var [key, value] of data.entries()) {
      if (value.length === 0 && !value) continue;

      const [prefix, contents] = key.split('-');

      if (!temp[prefix]) {
        temp[prefix] = {};
      } else if (!temp[prefix][contents]) {
        temp[prefix][contents] = {};
      }

      temp[prefix][contents] = value;
    }

    alert(JSON.stringify(temp));
  };

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
        <form
          className={classNames(styles.gridContents)}
          onSubmit={e => {
            submitHandler(e);
          }}
        >
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
          <button>123</button>
        </form>
      </Grid>
    </main>
  );
};

export default App;
