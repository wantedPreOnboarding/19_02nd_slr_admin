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
    const data = new FormData(e.target);
    for (var [key, value] of data.entries()) {
      console.log(key, value);
    }
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
              <MileageEtc headTitle="상품 혜택 허용 설정" menuTitle="마일리지 적립" />
            </Grid>
            <Grid item>
              <MileageEtc headTitle="기타 설정" menuTitle="감사카드 제공" />
            </Grid>
            <Grid item>
              <ProductIntroNotice />
            </Grid>
          </Grid>
        </form>
      </Grid>
    </main>
  );
};

export default App;
