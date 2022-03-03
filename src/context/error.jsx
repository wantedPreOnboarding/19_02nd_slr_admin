import { CATEGORIES, PRODUCT_OPTION } from './error.type';
import { createContext } from 'react';

const intialErrors = {
  categories: false,
  productOption: false,
};

const ErrorContext = createContext(null);

function errorReducer(state, action) {
  switch (action.type) {
    case CATEGORIES.ON:
      return {
        productOption: false,
        categories: true,
      };
    case CATEGORIES.OFF:
      return {
        productOption: false,
        categories: false,
      };
    case PRODUCT_OPTION.ON:
      return {
        productOption: true,
        categories: false,
      };
    case PRODUCT_OPTION.OFF:
      return {
        productOption: false,
        categories: false,
      };
    default:
      return state;
  }
}

const categoriesActionGenerator = state => {
  return {
    type: state ? CATEGORIES.ON : CATEGORIES.OFF,
  };
};

const productOptionActionGenerator = state => {
  return {
    type: state ? PRODUCT_OPTION.ON : PRODUCT_OPTION.OFF,
  };
};

export {
  intialErrors,
  ErrorContext,
  errorReducer,
  categoriesActionGenerator,
  productOptionActionGenerator,
};
