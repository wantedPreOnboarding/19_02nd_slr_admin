import React, { useCallback, useReducer } from 'react';
import { categoriesActionGenerator, formRequireReducer, intialErrors } from 'context/error';
import { debounce } from 'utils';
import { ErrorContext } from 'context/error';
import { productOptionActionGenerator } from 'context/error';

const SubmitForm = ({ children }) => {
  const [formRequire, errorsDispatch] = useReducer(formRequireReducer, intialErrors);

  const isValidCategories = requestBody => {
    return (
      requestBody?.basicInfo?.categories &&
      Object.keys(requestBody?.basicInfo?.categories).length !== 0
    );
  };

  const isValidProductOption = requestBody => {
    return requestBody?.proOpt;
  };

  const initObj = (obj, keys, index) => {
    const currentKey = keys[index];

    if (currentKey && !obj[currentKey]) {
      obj[currentKey] = {};
    }

    return currentKey && initObj(obj[currentKey], keys, ++index);
  };

  const toObjFromFormData = formData => {
    const obj = {};

    for (var [key, value] of formData.entries()) {
      if (value.length === 0 && !value) continue;
      const [prefix, contents, rest] = key.split('-');

      initObj(obj, [prefix, contents, rest], 0);

      if (rest) {
        insertData(obj[prefix][contents], rest, value);
      } else {
        insertData(obj[prefix], contents, value);
      }
    }

    return obj;

    function insertData(obj, key, value) {
      if (Array.isArray(obj[key])) {
        obj[key] = [...obj[key], value];
      } else if (typeof obj[key] === 'string') {
        obj[key] = [obj[key], value];
      } else {
        obj[key] = value;
      }
    }
  };

  const request = formData => {
    console.log(toObjFromFormData(formData));

    // fetch(url, { mothod: 'POST', body: formData })
  };

  const offRequireMessage = useCallback(
    debounce(() => {
      errorsDispatch(categoriesActionGenerator(false));
      errorsDispatch(productOptionActionGenerator(false));
    }, 4000),
    []
  );

  const submitHandler = e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const dataObj = toObjFromFormData(formData);

    if (!isValidCategories(dataObj)) {
      errorsDispatch(categoriesActionGenerator(true));
      offRequireMessage();
      return;
    }

    if (!isValidProductOption(dataObj)) {
      errorsDispatch(productOptionActionGenerator(true));
      offRequireMessage();
      return;
    }

    request(formData);

    alert('결과가 저장되었습니다. 콘솔을 확인해주세요!');
  };

  return (
    <form onSubmit={submitHandler}>
      <ErrorContext.Provider value={formRequire}>{children}</ErrorContext.Provider>
    </form>
  );
};

export default SubmitForm;
