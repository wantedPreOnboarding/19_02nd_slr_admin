import React from 'react';
import styles from './ProductDelivery.module.scss';
import { Table, TableHeader, TableRow } from 'Components';

const ProductDelivery = () => {
  return (
    <Table className="">
      <TableHeader>상품 배송 설정</TableHeader>
      <TableRow label="사용자 배송일 출발일 지정" className={styles.ProductDelivery}>
        임시 값
      </TableRow>
      <TableRow label="선 주문 예약 배송" className={styles.ProductDelivery}>
        임시 값
      </TableRow>
    </Table>
  );
};

export default ProductDelivery;
