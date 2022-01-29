import React, { useState } from 'react';
import { Grid } from 'Components';
import styles from './NoticeItem.module.css';

const NoticeItem = ({ onDelete, id }) => {

  const [inputs, setInputs] = useState({
    title: '',
    text: ''
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    const changeName = name.split('-')[1];
    if (value.length !== 0) {
      setInputs({
        ...inputs,
        [changeName]: value
      });
    }
  }
  const handleDelete = () => {
    onDelete && onDelete(id)
  }
  return (
    <>
      <Grid size={4} item className={styles.grids}>
        <input type='text' className={styles.input} aria-label='product title' placeholder='항목 제목 자유 입력' onChange={handleInput} name='notice-title' value={inputs.title} />
      </Grid>
      <Grid size={5} item className={styles.grids}>
        <input type='text' className={styles.input} aria-label='product text' placeholder='내용을 입력해주세요.' onChange={handleInput} name='notice-text' value={inputs.text} />
      </Grid>
      <Grid size={2} className={styles.box} item>
        <button className={styles.deleteRedBtn} onClick={handleDelete}>삭제</button>
      </Grid>
    </>
  );
};

export default NoticeItem;

