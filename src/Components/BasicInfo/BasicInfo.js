import React, { useState } from 'react';
import { CheckBox, Table, TableHeader, TableRow } from 'Components';
import styles from './BasicInfo.module.css';
import { categories as originCategory } from 'data/basicInfo';
import Card from './Card/Card';
import Grid from 'Components/Grid/Grid';
import Button from './Button/Button';
import { withCurlyBraces } from 'utils';

export default function BasicInfo() {
  const [categories, setCheckedCategories] = useState([...originCategory]);

  const toggleCheckState = category => {
    const newState = [...categories];
    let id = categories.findIndex(({ id }) => id === category.id);
    newState[id].checked = !category.checked;
    setCheckedCategories(newState);
  };

  return (
    <Table className="">
      <TableHeader>상품 기본 정보</TableHeader>
      <TableRow label="카테고리 *" className={styles.basicInfo}>
        <Grid container space={5}>
          <Grid size={7} item>
            <Card>
              <ul className={styles.categories}>
                {categories.map(category => {
                  return (
                    <CheckBox
                      key={category.id}
                      category={category.category}
                      checked={category.checked}
                      onChange={() => toggleCheckState(category)}
                    />
                  );
                })}
              </ul>
            </Card>
          </Grid>
          <Grid size={5} item>
            <Card>
              <ul className={styles.categories}>
                {categories
                  .filter(({ checked }) => checked)
                  .map(({ id, category, checked }) => {
                    // return <CheckBox key={id} category={category} checked={checked} />;
                    return <Button>{withCurlyBraces(category)}</Button>;
                  })}
              </ul>
            </Card>
          </Grid>
        </Grid>
      </TableRow>
      {/* <TableRow label="필터 태그" className={styles.basicInfo}>
        temp value
      </TableRow>
      <TableRow>temp value</TableRow>
      <TableRow>temp value</TableRow> */}
    </Table>
  );
}
