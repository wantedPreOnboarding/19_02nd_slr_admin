import React, { useState } from 'react';
import styles from 'Components/ProductRegister/ProductRegister.module.css';
const ProductRegister = () => {
  const menuList = [
    '기본 설정',
    '회원',
    '진열',
    '상품',
    '주문',
    '배송',
    '프로모션',
    '혜택',
    '고객 센터 관리',
    '알림',
  ];
  const innerMenuList = ['상품리스트', '상품재고 관리', '상품 등록'];
  const [openMenu, setOpenMenu] = useState(true);
  const handleMenu = menu => {
    menu === '상품' && setOpenMenu(!openMenu);
  };
  return (
    <div className={styles.template}>
      <div className={styles.menubar}>
        <div className={styles.menuBarInner}>
          <h1>SIr.LOIN</h1>
        </div>
        {menuList.map(menu => {
          return (
            <div key={menu}>
              <div
                className={styles.menuBarInner}
                onClick={() => {
                  handleMenu(menu);
                }}
              >
                <span>{menu}</span>
                <i className="fas fa-chevron-down"></i>
              </div>
              {menu === '상품' && openMenu && (
                <div className={styles.secondMenu}>
                  {innerMenuList.map(innermenu => {
                    return (
                      <div
                        className={`${styles.secondMenuInner} ${
                          innermenu === '상품 등록' && styles.active
                        }`}
                        key={innermenu}
                      >
                        {innermenu}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className={styles.menuhead}>
        <div className={styles.headInner}></div>
        <div className={styles.headInner}>
          <span className={styles.saveProduct}>상품 등록</span>
          <button className={styles.saveBtn} type="submit">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRegister;
