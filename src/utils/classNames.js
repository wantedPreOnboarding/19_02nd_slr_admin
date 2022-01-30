const isStringOrNum = value => {
  return typeof value === 'string' || typeof value === 'number';
};

const classNames = (...classes) => {
  return classes.filter(isStringOrNum).join(' ');
}
export default classNames;