import Grid from 'Components/Grid/Grid';
import React from 'react';
import withCurlyBraces from 'utils/withCurlyBraces';

export default function AnnounceInfo() {
  return (
    <Grid container>
      <Grid size={12}>정보고시 {withCurlyBraces('생성 순서')}</Grid>
      <Grid size={5} container item>
        <Grid item>123</Grid>
        <Grid item>456</Grid>
        <Grid item>789</Grid>
      </Grid>
      <Grid size={7} container item>
        <Grid item>123</Grid>
        <Grid item>456</Grid>
        <Grid container item>
          <Grid size={9} item>
            123
          </Grid>
          <Grid size={3} item>
            456
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
