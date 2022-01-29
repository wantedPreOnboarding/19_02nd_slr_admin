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

import styles from './App.module.css';
import ProductRegister from 'Components/ProductRegister/ProductRegister';

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

    alert('결과가 저장되었습니다. 콘솔을 확인해주세요!');
  };

  return (
    <main className={styles.main}>
      <form
        onSubmit={e => {
          submitHandler(e);
        }}
      >
        <ProductRegister> </ProductRegister>
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
      </form>
    </main>
  );
};

export default App;
