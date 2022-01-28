import classNames from './classNames';

test('문자 타입 클래스를 입력하면 한칸 씩 띄워 반환합니다.', () => {
  expect(classNames('a', 'b', 'c')).toBe('a b c');
});

test('오직 문자, 숫자형의 값만 반환합니다.', () => {
  expect(classNames(1, [], 'c')).toBe('1 c');
});
