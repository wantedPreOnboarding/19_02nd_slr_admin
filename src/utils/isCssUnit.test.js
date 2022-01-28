import isCssUnit from './isCssUnit';

// css units
// 'px', 'pt', 'pc', 'em', 'rem', 'vh', 'vw', 'vmin', 'vmax', '%', 'cm', 'ch', 'mm', 'in'
test('css unit으로 입력하면 true를 반환한다.', () => {
  expect(isCssUnit('100px')).toBeTruthy();
  expect(isCssUnit('10pt')).toBeTruthy();
  expect(isCssUnit('1pc')).toBeTruthy();
  expect(isCssUnit('em')).toBeTruthy();
  expect(isCssUnit('rem')).toBeTruthy();
  expect(isCssUnit('vh')).toBeTruthy();
  expect(isCssUnit('vw')).toBeTruthy();
  expect(isCssUnit('vmin')).toBeTruthy();
  expect(isCssUnit('vmax')).toBeTruthy();
  expect(isCssUnit('%')).toBeTruthy();
  expect(isCssUnit('cm')).toBeTruthy();
  expect(isCssUnit('ch')).toBeTruthy();
  expect(isCssUnit('mm')).toBeTruthy();
  expect(isCssUnit('in')).toBeTruthy();
});

test('그 외의 값을 입력하면 false를 반환한다.', () => {
  expect(isCssUnit('ab')).toBeFalsy();
  expect(isCssUnit('1000')).toBeFalsy();
});
