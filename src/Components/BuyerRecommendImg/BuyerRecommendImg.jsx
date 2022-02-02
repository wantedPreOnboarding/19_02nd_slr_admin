import React from 'react';
import { ImageUpload, Table, TableHeader } from 'Components';

const BuyerRecommendImg = () => {
  return (
    <Table>
      <TableHeader>
        <span>구매자 추천 이미지</span>
      </TableHeader>
      <ImageUpload id="buyerFile" />
    </Table>
  );
};

export default BuyerRecommendImg;
