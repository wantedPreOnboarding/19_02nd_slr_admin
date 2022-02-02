import React, { useState } from 'react';
import { Grid } from 'Components';
import NoticeForm from './NoticeForm/NoticeForm';
import styles from './ProductIntroNotice.module.scss';
import { TableHeader, TableRow, Table } from 'Components';

const ProductIntroNotice = () => {
  const [noticeCount, setNoticeCount] = useState(1);

  const handlePlusCount = () => {
    setNoticeCount(noticeCount + 1);
  };

  const handleMinusCount = () => {
    setNoticeCount(noticeCount - 1);
  };

  return (
    <Table>
      <TableHeader>상품 정보 고시</TableHeader>
      <TableRow>
        <Grid container className={styles.gridInnerColor} pdLevel={10}>
          {Array.from({ length: noticeCount }, (_, index) => index + 1).map(index => {
            return <NoticeForm index={index} handleMinusCount={handleMinusCount} />;
          })}
          <Grid size={12} pdLevel={0}>
            <button type="button" className={styles.addBtn} onClick={handlePlusCount}>
              정보 고시 추가
            </button>
          </Grid>
        </Grid>
      </TableRow>
    </Table>
  );
};

export default ProductIntroNotice;
