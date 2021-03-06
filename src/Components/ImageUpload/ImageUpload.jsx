import React, { useState } from 'react';
import styles from './ImageUpload.module.scss';
import { classNames } from 'utils';

const ImageUpload = ({ id, maxImage }) => {
  const [imageList, setImageList] = useState([]);

  const handleFileUpload = event => {
    if (imageList.length >= maxImage) {
      alert(`이미지를 ${maxImage}개 이상 등록할 수 없습니다. 삭제 후 업로드 해주세요.`);
      return;
    }

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
    <>
      <label className={styles.tableImglabel} htmlFor={id}>
        + 이미지 추가
      </label>
      <input
        className={styles.tableImgInput}
        type="file"
        id={id}
        accept="image/*"
        onChange={handleFileUpload}
      />
      <div>
        {imageList.map(item => (
          <div className={styles.tabelFileCol} key={item.id}>
            <span>{item.name}</span>
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => hadleDeleImg(item.id)}
            >
              <i className={classNames('fas', 'fa-times', styles.icon)} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUpload;
