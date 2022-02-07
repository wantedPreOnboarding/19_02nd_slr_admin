const debounce = (func, wait) => {
  let id;
  return function () {
    window.clearTimeout(id);
    id = window.setTimeout(func, wait);
  };
};

export default debounce;
