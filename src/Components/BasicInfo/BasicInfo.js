import React, { useState } from 'react';
import { A11yInput, CheckBox, Table, TableHeader, TableRow } from 'Components';
import Card from './Card/Card';
import Grid from 'Components/Grid/Grid';
import Button from './Button/Button';
import SearchFilter from './SearchFilter/SearchFilter';
import { categories as originCategory, productCode, stock } from 'data/basicInfo';
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
    <Table pdLevel={5}>
      <TableHeader className={styles.pd}>상품 기본 정보</TableHeader>
      <TableRow label="카테고리 *">
        <Grid container>
          <Grid className={styles.pdr5} size={7} item>
            <Card>
              <ul className={styles.categories}>
                {categories.map(category => {
                  return (
                    <CheckBox
                      key={category.id}
                      category={category.category}
                      checked={category.checked}
                      onChange={() => toggleCheckState(category)}
                      name="basicInfo-category"
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
                      <Button type={1} onClick={() => toggleCheckState(category)}>
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
      <TableRow label="필터 태그" className={styles.relative}>
        <SearchFilter />
      </TableRow>
      <TableRow className={styles.removePadding} label="상품명 *">
        <div className={styles.productName}>
          <A11yInput
            name="basicInfo-prodName"
            label="상품명"
            className={styles.a11yInput}
            placeholder="상품명을 입력해 주세요."
          />
          <label>상품 코드</label>
          <span>{withCurlyBraces(productCode)}</span>
        </div>
      </TableRow>
      <TableRow label="상품 구성 소개 정보*">
        <A11yInput
          name="basicInfo-packageInfo"
          label="상품 구성 소개 정보"
          className=""
          placeholder="상품 구성 소개 정보를 입력해 주세요."
        />
      </TableRow>
      <TableRow label="상품 썸네일"></TableRow>
      <TableRow label="상품 대표 이미지"></TableRow>
      <TableRow className={styles.center} label="상품 총 재고 *">
        {withCurlyBraces(stock)}개
      </TableRow>
    </Table>
  );
}
