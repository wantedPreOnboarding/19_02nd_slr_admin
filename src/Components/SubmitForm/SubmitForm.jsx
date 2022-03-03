import React, { useCallback, useReducer } from 'react';
import { categoriesActionGenerator, errorReducer, intialErrors } from 'context/error';
import { debounce } from 'utils';
import { ErrorContext } from 'context/error';

const SubmitForm = ({ children }) => {
  const [errors, errorsDispatch] = useReducer(errorReducer, intialErrors);

  const offErrorMessage = useCallback(
    debounce(() => {
      errorsDispatch(categoriesActionGenerator(false));
    }, 4000),
    []
  );

  const submitHandler = e => {
    e.preventDefault();
    const requestBody = {};
    const inputData = new FormData(e.target);

    const initBody = (obj, keys, index) => {
      const currentKey = keys[index];

      if (currentKey && !obj[currentKey]) {
        obj[currentKey] = {};
      }

      return currentKey && initBody(obj[currentKey], keys, ++index);
    };

    for (var [key, value] of inputData.entries()) {
      if (value.length === 0 && !value) continue;
      const [prefix, contents, rest] = key.split('-');

      initBody(requestBody, [prefix, contents, rest], 0);

      let jsonValue;

      try {
        jsonValue = JSON.parse(value);
      } catch (e) {
        jsonValue = value;
      }

      if (rest) requestBody[prefix][contents][rest] = jsonValue;
      else requestBody[prefix][contents] = jsonValue;
    }

    if (
      !requestBody?.basicInfo?.categories ||
      Object.keys(requestBody?.basicInfo?.categories).length === 0
    ) {
      errorsDispatch(categoriesActionGenerator(true));
      offErrorMessage();
      return;
    }

    console.log(requestBody);
    alert('결과가 저장되었습니다. 콘솔을 확인해주세요!');
  };
  return (
    <form
      onSubmit={e => {
        submitHandler(e);
      }}
    >
      <ErrorContext.Provider value={errors}>{children}</ErrorContext.Provider>
    </form>
  );
};
export default SubmitForm;
