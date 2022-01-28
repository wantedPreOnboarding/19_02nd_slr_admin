import React, { useState } from 'react';
import styles from 'Components/ProductOption/ProOptForm/ProOptForm.module.css';
const ProOptForm = ({ addOption, delOption, id }) => {
  const [optionNum, setOptionNum] = useState(0);
  const [optionPro, setOptionPro] = useState('');

  const addOptionPro = () => {
    setOptionNum(optionNum + 1);
    setOptionPro([...optionPro, optionNum + 1]);
  };

  const delOptionPro = proId => {
    setOptionNum(optionNum - 1);
    setOptionPro(optionPro.filter(i => i !== proId));
  };
  const [imageSrc, setImageSrc] = useState();

  const readImage = input => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  return (
    <div
      className={`${styles.form} ${addOption === 'image' && styles.imageForm} ${
        imageSrc && styles.sizeChange
      }`}
    >
      {addOption === 'image' ? (
        <section className={styles.imageInput}>
          {imageSrc && (
            <img alt="imageInput" id="imageInput" src={imageSrc} className={styles.imageSize} />
          )}
          <div>
            <label
              htmlFor="imageInput"
              className={`
        imageSrc && ${styles.marginChange}
      `}
            >
              + 이미지 첨부
            </label>
            <input
              type="file"
              name="imageInput"
              id="imageInput"
              accept="image/*"
              onChange={e => {
                readImage(e.target);
              }}
            />
          </div>
        </section>
      ) : (
        <>
          <section className={styles.delWrap}>
            <button type="button" className={styles.delete} onClick={() => delOption(id)}>
              삭제
            </button>
          </section>
          <section className={styles.formWrap}>
            <input
              type="text"
              className={styles.option}
              placeholder="옵션명을 입력해 주세요. (필수)"
            />
            <section className={styles.priceWrap}>
              <input type="text" className={styles.price} placeholder="상품 정상가(필수)" />
              <span>원</span>
              <span>{`{{할인율}}%`}</span>
              <input type="text" className={styles.price} placeholder="상품 판매가(필수)" />
              <span>원</span>
              <input type="text" className={styles.stock} placeholder="재고 (필수)" />
              <span>개</span>
              <select name="taxs" className={styles.select}>
                <option value="taxFree">비과세</option>
                <option value="tax">과세</option>
              </select>
            </section>
            {optionPro &&
              optionPro.map(a => {
                return (
                  <section className={styles.addOptSection} key={a} id={a}>
                    <div className={styles.buttonBox} />
                    <input
                      type="text"
                      className={styles.addOptionName}
                      placeholder="추가 옵션명 (필수)"
                    />
                    <input
                      type="text"
                      className={styles.addOptionPrice}
                      placeholder="추가 옵션 정상가 (필수)"
                    />
                    <span>원</span>
                    <button
                      type="button"
                      className={`${styles.delete} ${styles.bigBtn}`}
                      onClick={() => delOptionPro(a)}
                    >
                      삭제
                    </button>
                  </section>
                );
              })}

            <button type="button" className={styles.addOptBtn} onClick={addOptionPro}>
              <span className={styles.addOptBtnSpan}>
                <i className="fas fa-plus"></i>
              </span>
              추가옵션상품추가
            </button>
          </section>
        </>
      )}
    </div>
  );
};

export default ProOptForm;
