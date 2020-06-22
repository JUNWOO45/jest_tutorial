const checkBoolean = require('./checkBoolean');

test('check Boolean', () => {
  expect(checkBoolean('123')).toBeTruthy()
  expect(checkBoolean('')).toBeFalsy()
  expect(checkBoolean(123)).toBeTruthy()
  expect(checkBoolean(0)).toBeFalsy()
  expect(checkBoolean(undefined)).toBeFalsy()
})