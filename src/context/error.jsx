import { CATEGORIES, PRODUCT_INTRO_NOTICE } from './error.type';
import { createContext } from 'react';

const intialErrors = {
  categories: false,
  productIntroNotice: false,
};

const ErrorContext = createContext(null);

function errorReducer(state, action) {
  switch (action.type) {
    case CATEGORIES.ON:
      return {
        productIntroNotice: false,
        categories: true,
      };
    case CATEGORIES.OFF:
      return {
        productIntroNotice: false,
        categories: false,
      };
    case PRODUCT_INTRO_NOTICE.ON:
      return {
        productIntroNotice: true,
        categories: false,
      };
    case PRODUCT_INTRO_NOTICE.OFF:
      return {
        productIntroNotice: false,
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

const productIntroActionGenerator = state => {
  return {
    type: state ? PRODUCT_INTRO_NOTICE.ON : PRODUCT_INTRO_NOTICE.OFF,
  };
};

export {
  intialErrors,
  ErrorContext,
  errorReducer,
  categoriesActionGenerator,
  productIntroActionGenerator,
};
