import React, { useState } from 'react';
import { Grid } from 'Components';
import styles from './ProductIntroNotice.module.css';

const ProductIntroNotice = () => {
  const [inputs, setInputs] = useState({
    weight: '',
    origin: '',
    grade: '',
    keep: '',
    type: '',
    title: '',
    text: ''
  });
  const [noticeCount, setNoticeCount] = useState(0);

  const handleInput = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }

  return (
    <Grid container className={styles.grid}>
      <Grid size={12} className={styles.gridTitle}>
        <h2> 상품 정보 고시</h2>
      </Grid>
      <Grid container className={styles.gridInnerColor}>
        <Grid container className={styles.gridInner}>
          <Grid size={10} item>
            <h3>정보고시</h3>
          </Grid>
          <Grid size={2} item>
            <Grid item className={styles.box}>
              <button className={styles.deleteBtn}>삭제</button>
            </Grid>
          </Grid>
          <Grid size={4} className={styles.inputTitle} item>
            <span> 제품명 / 중량</span>
          </Grid>
          <Grid size={8} item className={styles.inputBox}>
            <input aria-label='weight' type='text' placeholder='제품명 / 중량을 입력해주세요.' onChange={handleInput} name='weight' value={inputs.weight} />
          </Grid>
          <Grid size={4} className={styles.inputTitle} item>
            <span className={styles.inputTitle}>원산지 / 원재료 함량</span>
          </Grid>
          <Grid size={8} item>
            <input type='text' aria-label='origin' placeholder='원산지 / 원재 함량을 입력해주세요.' onChange={handleInput} name='origin' value={inputs.origin} />
          </Grid>
          <Grid size={4} className={styles.inputTitle} item>
            <span className={styles.inputTitle}>등급</span>
          </Grid>
          <Grid size={8} item>
            <input type='text' aria-label='grade' placeholder='등급(근내지방도 수치)를 입력해주세요.' onChange={handleInput} name='grade' value={inputs.grade} />
          </Grid>
          <Grid size={4} className={styles.inputTitle} item>
            <span className={styles.inputTitle}>보관</span>
          </Grid>
          <Grid size={8} item>
            <input type='text' aria-label='keep' placeholder='보관 방식을 입력해주세요' onChange={handleInput} name='keep' value={inputs.keep} />
          </Grid>
          <Grid size={4} item className={styles.inputTitle}>
            <span className={styles.inputTitle}>식품 유형</span>
          </Grid>
          <Grid size={8} item>
            <input type='text' aria-label='type' placeholder='식품 유형을 입력해주세요. (ex)포장육' onChange={handleInput} name='type' value={inputs.type} />
          </Grid>
          <Grid size={4} item className={styles.grids}>
            <input type='text' aria-label='product title' placeholder='항목 제목 자유 입력' onChange={handleInput} name='title' value={inputs.title} />
          </Grid>
          <Grid size={5} item className={styles.grids}>
            <input type='text' aria-label='product text' placeholder='내용을 입력해주세요.' onChange={handleInput} name='text' value={inputs.text} />
          </Grid>
          <Grid size={2} className={styles.box} item>
            <button className={styles.deleteRedBtn}>삭제</button>
          </Grid>
          <Grid size={3} className={styles.box} item>
            <button className={styles.plusBtn}>+ 항목추가</button>
          </Grid>
        </Grid>
        <Grid size={12}>
          <button className={styles.addBtn}>+ 정보 고시 추가</button>
        </Grid >
      </Grid>
    </Grid>
  );
};

export default ProductIntroNotice;

