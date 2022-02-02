import makeClassNameGenerator from './classNameGenerator';

// makeClassNameGenerator prefix를 설정하며,
// 반환한 함수에 value을 입력하여 호출하면 prefixvalue 형태로 문자를 만환합니다.

test('testGenerator(test)(1) => test1 반환', () => {
  const testGenerator = makeClassNameGenerator('test');
  expect(testGenerator(1)).toBe('test1');
});

test('paddingGenerator(pd1)(1) => pd1 반환', () => {
  const paddingGenerator = makeClassNameGenerator('pd');
  expect(paddingGenerator(1)).toBe('pd1');
});

test('2번째 인자로 seperator를 입력할 수 있습니다.', () => {
  const prefixer = 'pd';
  const seperator = '-';
  const paddingGenerator = makeClassNameGenerator(prefixer, seperator);
  const paddingList = [1, 2, 3, 4, 5].map(value => paddingGenerator(value));
  expect(paddingList).toEqual(['pd-1', 'pd-2', 'pd-3', 'pd-4', 'pd-5']);
});
