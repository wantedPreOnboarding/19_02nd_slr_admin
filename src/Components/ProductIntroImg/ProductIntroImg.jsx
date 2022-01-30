import React, { useState } from 'react';
import { Table, TableHeader, TableRow } from 'Components';
import styles from './ProductIntroImg.module.css';

const ProductIntroImg = () => {
  const [fileList, setFileList] = useState([]);

  const handleFileUpload = (event) => {
    const { files } = event.target;
    setFileList([...fileList, { id: Math.random() * 100, name: files[0].name }]);
  }

  const hadleDeleImg = (id) => {
    const list = [...fileList]
    const index = list.findIndex(item => item.id === id);
    list.splice(index, 1)
    setFileList(list)
  }

  return (
    <Table className={styles.table}>
      <TableHeader className={styles.tableHeader}>
        <span>상품 소개 이미지</span>
      </TableHeader>
      <TableRow className={styles.tableFileRow}>
        <label htmlFor='productFile'>+ 이미지 추가</label>
        <input type='file' id='productFile' accept='image/*' onChange={handleFileUpload} />
        <div>
          {fileList.map(item => (
            <div className={styles.tabelFileCol} key={item.id}>
              <span>{item.name}</span>
              <button type='button' className={styles.deleteBtn} onClick={() => hadleDeleImg(item.id)}>
                <i className='fas fa-times' />
              </button>
            </div>
          ))}
        </div>
      </TableRow>
    </Table>
  );
};

export default ProductIntroImg;