import { Table, TableHeader, TableRow } from 'Components';
import Grid from 'Components/Grid/Grid';
import React from 'react';

export default function ImageUploadTable({ title }) {
  return (
    <Table>
      <TableHeader>{title}</TableHeader>
      <TableRow>
        <Grid container>
          <Grid container item size={4} center>
            이미지
          </Grid>
          <Grid item size={8}>
            업로드
          </Grid>
        </Grid>
      </TableRow>
    </Table>
  );
}
