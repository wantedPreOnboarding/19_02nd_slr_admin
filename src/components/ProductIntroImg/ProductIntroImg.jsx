import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableRow } from 'Components';
import styles from './ProductIntroImg.module.css';

const ProductIntroImg = () => {
  const [fileList, setFileList] = useState([]);

  const handleFileUpload = (event) => {
    const { files } = event.target;
    setFileList((list) => [...list, files[0].name]);
  }

  useEffect(() => {
    console.log(`🚀 → fileList`, fileList);
  }, [fileList])

  return (
    <Table className={styles.table}>
      <TableHeader className={styles.tableHeader}>
        <span>상품 소개 이미지</span>
      </TableHeader>
      <TableRow className={styles.tableFileRow}>
        <label htmlFor='file'>+ 이미지 추가</label>
        <input type='file' id='file' accept='image/*' onChange={handleFileUpload} />
      </TableRow>
    </Table>
  );
};

export default ProductIntroImg;