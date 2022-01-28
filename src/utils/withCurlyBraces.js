const withCurlyBraces = (str, num = 2) => {
  let result = '';

  for (let i = 0; i < num * 2; i++) {
    result += i < num ? '{' : '}';

    if (i === num - 1) {
      result += str;
    }
  }
  return result;
};

export default withCurlyBraces;
