import React from 'react';
import { ImageUpload, Table, TableHeader, TableRow } from 'Components';

const ProductIntroImg = () => {
  return (
    <Table>
      <TableHeader>
        <span>상품 소개 이미지</span>
      </TableHeader>
      <TableRow pdLevel={5} center>
        <ImageUpload id="productFile" />
      </TableRow>
    </Table>
  );
};

export default ProductIntroImg;
