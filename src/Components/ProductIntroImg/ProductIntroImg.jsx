import React from 'react';
import { ImageUpload, Table, TableHeader } from 'Components';

const ProductIntroImg = () => {
  return (
    <Table>
      <TableHeader>
        <span>상품 소개 이미지</span>
      </TableHeader>
      <ImageUpload id="productFile" />
    </Table>
  );
};

export default ProductIntroImg;
