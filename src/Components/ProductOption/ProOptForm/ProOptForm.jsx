import React, { useState } from 'react';
import styles from 'Components/ProductOption/ProOptForm/ProOptForm.module.css';
const ProOptForm = ({ addOption, delOption, id }) => {
  const [optionNum, setOptionNum] = useState(0);
  const [optionPro, setOptionPro] = useState('');
  const [normalPrice, setNormalPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [discountRatio, setDiscountRatio] = useState('할인율%');
  const [imageSrc, setImageSrc] = useState();

  const addOptionPro = () => {
    setOptionNum(optionNum + 1);
    setOptionPro([...optionPro, optionNum + 1]);
  };

  const delOptionPro = proId => {
    setOptionNum(optionNum - 1);
    setOptionPro(optionPro.filter(i => i !== proId));
  };

  const readImage = input => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  };
  const changeDiscountRatio = (normal, selling) => {
    setDiscountRatio(
      (1 - selling / normal) * 100 > 0
        ? ((1 - selling / normal) * 100).toFixed(2) + '%'
        : '할인율없음'
    );
  };
  const changeNormalPrice = e => {
    setNormalPrice(e.target.value);
    changeDiscountRatio(e.target.value, sellingPrice);
  };
  const changeSellingPrice = e => {
    setSellingPrice(e.target.value);
    changeDiscountRatio(normalPrice, e.target.value);
  };

  return (
    <div
      className={`${styles.form} ${addOption === 'image' && styles.imageForm} ${imageSrc && styles.sizeChange
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
              name="proOpt-image"
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
              name="proOpt-optionName"
              className={styles.option}
              placeholder="옵션명을 입력해 주세요. (필수)"
              required
            />
            <section className={styles.priceWrap}>
              <input
                name="proOpt-proNormalPrice"
                type="number"
                min="0"
                className={styles.price}
                placeholder="상품 정상가(필수)"
                onChange={changeNormalPrice}
                required
              />
              <span>원</span>
              <span>{discountRatio}</span>
              <input
                name="proOpt-proSellingPrice"
                type="number"
                min="0"
                className={styles.price}
                placeholder="상품 판매가(필수)"
                required
                onChange={changeSellingPrice}
              />
              <span>원</span>
              <input
                name="proOpt-stock"
                min="0"
                type="number"
                className={styles.stock}
                placeholder="재고 (필수)"
                required
              />
              <span>개</span>
              <select name="proOpt-taxs" className={styles.select}>
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
                      name="proOpt-addOptionName"
                      type="text"
                      className={styles.addOptionName}
                      placeholder="추가 옵션명 (필수)"
                      required
                    />
                    <input
                      name="proOpt-addOptionPrice"
                      type="number"
                      min="0"
                      className={styles.addOptionPrice}
                      placeholder="추가 옵션 정상가 (필수)"
                      required
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
