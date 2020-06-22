const fruits = require('./fruits');

test('test fruits array', () => {
  expect(fruits()).toHaveLength(3)
  expect(fruits()).toContain('apple')
  expect(fruits()).not.toContain('mango')
})