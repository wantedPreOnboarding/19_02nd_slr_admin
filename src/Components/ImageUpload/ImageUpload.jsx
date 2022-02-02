import React, { useState } from 'react';
import { TableRow } from 'Components';
import styles from './ImageUpload.module.css';

const ImageUpload = ({ id }) => {
  const [imageList, setImageList] = useState([]);

  const handleFileUpload = event => {
    const { files } = event.target;
    setImageList([...imageList, { id: Math.random() * 100, name: files[0].name }]);
  };

  const hadleDeleImg = id => {
    const list = [...imageList];
    const index = list.findIndex(item => item.id === id);
    list.splice(index, 1);
    setImageList(list);
  };

  return (
    <TableRow className={styles.tableFileRow}>
      <label htmlFor={id}> + 이미지 추가</label>
      <input type="file" id={id} accept="image/*" onChange={handleFileUpload} />
      <div>
        {imageList.map(item => (
          <div className={styles.tabelFileCol} key={item.id}>
            <span>{item.name}</span>
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => hadleDeleImg(item.id)}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        ))}
      </div>
    </TableRow>
  );
};

export default ImageUpload;
