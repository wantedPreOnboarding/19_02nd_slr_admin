import React, { useState } from 'react';
import { Grid } from 'Components';
import NoticeForm from './NoticeForm/NoticeForm';
import styles from './ProductIntroNotice.module.scss';
import { TableHeader, TableRow, Table } from 'Components';

const idGenerator = array => {
  return array[array.length - 1]?.id + 1 || 1;
};

const ProductIntroNotice = () => {
  const [noticeData, setNoticeCount] = useState([{ id: 1 }]);

  const noticeForms = Array.from(noticeData).map(({ id }, index) => {
    return (
      <NoticeForm key={id} index={index + 1} handleMinusCount={() => handleDeleteNotice(id)} />
    );
  });

  const handleAddNoticeData = () => {
    setNoticeCount([...noticeData, { id: idGenerator(noticeData) }]);
  };

  const handleDeleteNotice = targetId => {
    const indexNotice = noticeData.findIndex(({ id }) => id === targetId);
    setNoticeCount([...noticeData.slice(0, indexNotice), ...noticeData.slice(indexNotice + 1)]);
  };

  return (
    <Table>
      <TableHeader>상품 정보 고시</TableHeader>
      <TableRow>
        <Grid container className={styles.gridInnerColor} pdLevel={10}>
          {noticeForms}
          <Grid size={12} pdLevel={0}>
            <button type="button" className={styles.addBtn} onClick={handleAddNoticeData}>
              정보 고시 추가
            </button>
          </Grid>
        </Grid>
      </TableRow>
    </Table>
  );
};

export default ProductIntroNotice;
