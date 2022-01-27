import React from 'react';
import { CheckBox, Table, TableHeader, TableRow } from 'Components';
import styles from './BasicInfo.module.css';
import { categories } from 'constants/basicInfo';
import Card from './Card/Card';
import Grid from 'Components/Grid/Grid';

export default function BasicInfo() {
  const data = categories;

  return (
    <Table className="">
      <TableHeader>상품 기본 정보</TableHeader>
      <TableRow label="카테고리 *" className={styles.basicInfo}>
        <Grid container space={5}>
          <Grid size={7} item>
            <Card>
              <ul className={styles.categories}>
                {data.map(({ id, category, checked }) => {
                  return <CheckBox key={id} category={category} checked={checked} />;
                })}
              </ul>
            </Card>
          </Grid>
          <Grid size={5} item>
            <Card>
              <ul className={styles.categories}>
                {data.map(({ id, category, checked }) => {
                  return <CheckBox key={id} category={category} checked={checked} />;
                })}
              </ul>
            </Card>
          </Grid>
        </Grid>
      </TableRow>
      <TableRow label="필터 태그" className={styles.basicInfo}>
        temp value
      </TableRow>
      <TableRow>temp value</TableRow>
      <TableRow>temp value</TableRow>
    </Table>
  );
}
