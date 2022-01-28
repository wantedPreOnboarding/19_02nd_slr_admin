import React from 'react';
import ProductOption from 'Components/ProductOption/ProductOption';

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