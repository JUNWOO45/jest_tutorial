const getUser = require('./getUser');

test('getUser :::: ', () => {
  expect(getUser(25)).toStrictEqual({
    id: 25,
    email: `user25@test.com`
  });
});