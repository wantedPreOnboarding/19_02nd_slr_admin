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

  const checkedCategories = () => {
    return categories.filter(({ checked }) => checked);
  };

  return (
    <Table className="">
      <TableHeader>상품 기본 정보</TableHeader>
      <TableRow label="카테고리 *">
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
                {checkedCategories().map(category => {
                  return (
                    <li key={category.id}>
                      <Button onClick={() => toggleCheckState(category)}>
                        {withCurlyBraces(category.category)} X
                      </Button>
                    </li>
                  );
                })}
              </ul>
              {checkedCategories().length === 0 && (
                <span class={styles.message}>카테고리를 지정해 주세요.</span>
              )}
            </Card>
          </Grid>
        </Grid>
      </TableRow>
      <TableRow label="필터 태그">
        <input className="" placeholder="필터태그를 검색해 주세요."></input>
      </TableRow>
      <TableRow label="상품명 *">
        <input className=""></input>
      </TableRow>
      <TableRow label="상품 구성 소개 정보*">
        <input className=""></input>
      </TableRow>
      <TableRow label="상품 썸네일">
        <input className=""></input>
      </TableRow>
      <TableRow label="상품 대표 이미지">
        <input className=""></input>
      </TableRow>
      <TableRow label="상품 총 재고 *">
        <input className=""></input>
      </TableRow>
    </Table>
  );
}
