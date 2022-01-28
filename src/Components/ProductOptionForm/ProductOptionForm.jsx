import React from 'react';
import styles from 'Components/ProductOptionForm/ProductOptionForm.module.css';
const ProductOptionForm = ({ addOption }) => {
  return (
    <form className={`${styles.form} ${addOption === 'image' && styles.imageForm}`}>
      {addOption === 'image' ? (
        <section className={styles.imageInput}>
          <label htmlFor="imageInput"> + 이미지 첨부</label>
          <input type="file" name="imageInput" id="imageInput" accept="image/*" />
        </section>
      ) : (
        <>
          <section className={styles.delWrap}>
            <button className={styles.delete}>삭제</button>
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
            {addOption === 'add' && (
              <section className={styles.addOptSection}>
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
                <button className={`${styles.delete} ${styles.bigBtn}`}>삭제</button>
              </section>
            )}
            <button className={styles.addOptBtn}>
              <span className={styles.addOptBtnSpan}>
                <i className="fas fa-plus"></i>
              </span>
              추가옵션상품추가
            </button>
          </section>
        </>
      )}
    </form>
  );
};

export default ProductOptionForm;
