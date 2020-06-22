const sum = require('./sum');

test('simple addition example', () => {
  expect(sum(1, 2)).toBe(3)
  expect(sum(1, 5)).toBe(6)
  expect(sum(1, -8)).toBe(-7)
  expect(sum(-11, -2)).toBe(-13)
});
