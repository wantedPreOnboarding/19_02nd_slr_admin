import React, { useState } from 'react';
import styles from 'Components/Nav/Nav.module.css';
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
    <section className={styles.template}>
      <nav className={styles.menubar}>
        <div className={`${styles.menuBarInner} ${styles.top}`}>
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
      </nav>
    </section>
  );
};

export default ProductRegister;
