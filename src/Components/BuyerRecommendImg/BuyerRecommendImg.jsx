import React, { useState } from 'react';
import { Table, TableHeader, TableRow } from 'Components';
import styles from './BuyerRecommendImg.module.css';

const BuyerRecommendImg = () => {
  const [buyerList, setBuyerList] = useState([]);

  const handleFileUpload = (event) => {
    const { files } = event.target;
    setBuyerList([...buyerList, { id: Math.random() * 100, name: files[0].name }]);
  }

  const hadleDeleImg = (id) => {
    const list = [...buyerList]
    const index = list.findIndex(item => item.id === id);
    list.splice(index, 1)
    setBuyerList(list)
  }

  return (
    <Table className={styles.table}>
      <TableHeader className={styles.tableHeader}>
        <span>구매자 추천 이미지</span>
      </TableHeader>
      <TableRow className={styles.tableFileRow}>
        <label htmlFor='file'> + 이미지 추가</label>
        <input type='file' accept='image/*' onChange={handleFileUpload} />
        <div>
          {buyerList.map(item => (
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

export default BuyerRecommendImg;