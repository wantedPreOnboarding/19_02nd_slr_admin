import React from 'react';
import Aside from 'Components/Aside/Aside';
import ProductIntroImg from 'Components/ProductIntroImg/ProductIntroImg';
import BuyerRecommendImg from 'Components/BuyerRecommendImg/BuyerRecommendImg';

const App = () => {
  return (
    <div>
      <Aside />
      <ProductIntroImg />
      <BuyerRecommendImg />
    </div>
  );
};

export default App;