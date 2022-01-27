import React from 'react';

const ProductOptionForm = ({ addOption }) => {
  return (
    <form className="form">
      <button className="delete">삭제</button>
      <input type="text" className="optionName" placeholder="옵션명을 입력해 주세요. (필수)" />
      <input type="text" className="price" placeholder="상품 정상가(필수)" />
      <span>원</span>
      <small>{`{{할인율}}%`}</small>
      <input type="text" className="price" placeholder="상품 판매가(필수)" />
      <span>원</span>
      <input type="text" className="stock" placeholder="재고 (필수)" />
      <select name="taxs" class="select">
        <option value="taxFree">비과세</option>
        <option value="tax">과세</option>
      </select>
      {addOption && (
        <section>
          <div className="buttonBox" />
          <input type="text" className="addOptionName" placeholder="추가 옵션명 (필수)" />
          <input type="text" className="addOptionPrice" placeholder="추가 옵션 정상가 (필수)" />
          <button className="bigDelete">삭제</button>
        </section>
      )}
      <button>
        <span>
          <i class="fas fa-plus"></i>
        </span>
        추가옵션상품추가
      </button>
    </form>
  );
};

export default ProductOptionForm;
