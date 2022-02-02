import React from 'react';
import { ImageUpload, Table, TableHeader, TableRow } from 'Components';

const BuyerRecommendImg = () => {
  return (
    <Table>
      <TableHeader>
        <span>구매자 추천 이미지</span>
      </TableHeader>
      <TableRow pdLevel={5} center>
        <ImageUpload id="buyerFile" />
      </TableRow>
    </Table>
  );
};

export default BuyerRecommendImg;
