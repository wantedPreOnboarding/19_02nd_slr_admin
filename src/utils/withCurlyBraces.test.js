import withCurlyBraces from './withCurlyBraces';

test('기본적으로 입력된 값의 양쪽에 {{}}를 감싸 반환합니다.', () => {
  expect(withCurlyBraces('a')).toBe('{{a}}');
});

test('2번쨰 인수로 중괄호의 개수를 정할 수 있습니다.', () => {
  expect(withCurlyBraces('a', 3)).toBe('{{{a}}}');
});
