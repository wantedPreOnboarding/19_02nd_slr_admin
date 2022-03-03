import React, { useCallback, useReducer } from 'react';
import { categoriesActionGenerator, errorReducer, intialErrors } from 'context/error';
import { debounce } from 'utils';
import { ErrorContext } from 'context/error';

const SubmitForm = ({ children }) => {
  const [errors, errorsDispatch] = useReducer(errorReducer, intialErrors);

  const isValidSubmit = requestBody => {
    return !requestBody?.basicInfo?.categories ||
      Object.keys(requestBody?.basicInfo?.categories).length === 0
      ? false
      : true;
  };

  const initBody = (requestBody, keys, index) => {
    const currentKey = keys[index];

    if (currentKey && !requestBody[currentKey]) {
      requestBody[currentKey] = {};
    }

    return currentKey && initBody(requestBody[currentKey], keys, ++index);
  };

  const setBodyForRequest = (requestBody, inputData) => {
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
  };

  const request = requestBody => {
    console.log(requestBody);
  };

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

    setBodyForRequest(requestBody, inputData);

    if (!isValidSubmit(requestBody)) {
      errorsDispatch(categoriesActionGenerator(true));
      offErrorMessage();
      return;
    }

    request(requestBody);
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
