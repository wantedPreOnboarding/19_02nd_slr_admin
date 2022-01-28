import React from 'react';
import styles from 'Components/ProductOptionForm/ProductOptionForm.module.css';
const ProductOptionForm = ({ addOption }) => {
  return (
    <form className={styles.form}>
      <button className={styles.delete}>삭제</button>
      <input
        type="text"
        className={styles.optionName}
        placeholder="옵션명을 입력해 주세요. (필수)"
      />
      <input type="text" className={styles.price} placeholder="상품 정상가(필수)" />
      <span>원</span>
      <small>{`{{할인율}}%`}</small>
      <input type="text" className={styles.price} placeholder="상품 판매가(필수)" />
      <span>원</span>
      <input type="text" className={styles.stock} placeholder="재고 (필수)" />
      <select name="taxs" className={styles.select}>
        <option value="taxFree">비과세</option>
        <option value="tax">과세</option>
      </select>
      {addOption && (
        <section>
          <div className={styles.buttonBox} />
          <input type="text" className={styles.addOptionName} placeholder="추가 옵션명 (필수)" />
          <input
            type="text"
            className={styles.addOptionPrice}
            placeholder="추가 옵션 정상가 (필수)"
          />
          <button className={styles.bigDelete}>삭제</button>
        </section>
      )}
      <button>
        <span>
          <i className="fas fa-plus"></i>
        </span>
        추가옵션상품추가
      </button>
    </form>
  );
};

export default ProductOptionForm;
