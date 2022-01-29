const isStringOrNum = value => {
  return typeof value === 'string' || typeof value === 'number';
};

export default function classNames(...classes) {
  return classes.filter(isStringOrNum).join(' ');
}
