import React from 'react';
import { withCurlyBraces, paddingClassNameGenerator } from 'utils';
import { productCode, stock } from 'data/basicInfo';
import { A11yInput, ImageUpload, Table, TableHeader, TableRow } from 'Components';
import SearchFilter from './SearchFilter/SearchFilter';
import styles from './BasicInfo.module.css';
import commonStyles from 'styles/index.module.scss';
import Categories from './Categories/Categories';

const BasicInfo = () => {
  return (
    <Table pdLevel={5}>
      <TableHeader className={commonStyles[paddingClassNameGenerator(11)]}>
        상품 기본 정보
      </TableHeader>
      <TableRow label="카테고리 *" pdLevel={0}>
        <Categories />
      </TableRow>
      <TableRow label="필터 태그" className={styles.relative}>
        <SearchFilter />
      </TableRow>
      <TableRow pdLevel={0} label="상품명 *">
        <div className={styles.productName}>
          <A11yInput
            name="basicInfo-prodName"
            label="상품명"
            className={styles.a11yInput}
            placeholder="상품명을 입력해 주세요."
            required
          />
          <label>상품 코드</label>
          <span>{withCurlyBraces(productCode)}</span>
        </div>
      </TableRow>
      <TableRow label="상품 구성 소개 정보*">
        <A11yInput
          name="basicInfo-packageInfo"
          label="상품 구성 소개 정보"
          placeholder="상품 구성 소개 정보를 입력해 주세요."
          required
        />
      </TableRow>
      <TableRow label="상품 썸네일" center>
        <ImageUpload id="thumbnail" />
      </TableRow>
      <TableRow label="상품 대표 이미지" center>
        <ImageUpload id="mainImg" />
      </TableRow>
      <TableRow className={styles.center} label="상품 총 재고 *">
        {withCurlyBraces(stock)}개
      </TableRow>
    </Table>
  );
};
export default BasicInfo;
