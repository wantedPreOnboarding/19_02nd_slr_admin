const makeClassNameGenerator = (prefix, sperator = '') => {
  return name => `${prefix}${sperator}${name}`;
};

export default makeClassNameGenerator;
