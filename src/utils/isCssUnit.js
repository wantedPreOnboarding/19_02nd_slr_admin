const cssUnits = [
  'px',
  'pt',
  'pc',
  'em',
  'rem',
  'vh',
  'vw',
  'vmin',
  'vmax',
  '%',
  'cm',
  'ch',
  'mm',
  'in',
];

const isCssUnit = value => cssUnits.filter(unit => value?.includes?.(unit)).length !== 0;

export default isCssUnit;
