import React from 'react';
import { BasicInfo, Grid, ProductOption } from 'Components';
import ProductOption from 'Components/ProductOption/ProductOption';
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
          <Grid item>
            <ProductOption />
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
};

export default App;