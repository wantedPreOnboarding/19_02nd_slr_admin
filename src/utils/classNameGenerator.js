const makeClassNameGenerator = (prefix, sperator = '') => {
  return name => `${prefix}${sperator}${name}`;
};

const paddingClassNameGenerator = makeClassNameGenerator('pd');

export default makeClassNameGenerator;

export { paddingClassNameGenerator };
