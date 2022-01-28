import React, { useState } from 'react';
import { CheckBox, Table, TableHeader, TableRow } from 'Components';
import Card from './Card/Card';
import Grid from 'Components/Grid/Grid';
import Button from './Button/Button';
import { categories as originCategory } from 'data/basicInfo';
import { withCurlyBraces } from 'utils';
import styles from './BasicInfo.module.css';

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
                    >
                      {withCurlyBraces(category.category)}
                    </CheckBox>
                  );
                })}
              </ul>
            </Card>
          </Grid>
          <Grid size={5} item>
            <Card>
              <ul className={styles.checkedCategories}>
                {categories
                  .filter(({ checked }) => checked)
                  .map(category => {
                    return (
                      <li key={category.id}>
                        <Button onClick={() => toggleCheckState(category)}>
                          {withCurlyBraces(category.category)} X
                        </Button>
                      </li>
                    );
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
