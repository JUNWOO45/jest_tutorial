const getRankingData = require('./asyncAwait');

test('test async/await Promise', async () => {
  const user = await getRankingData(5);

  expect(user).toEqual({
    id: 5,
    name: 'User55',
    email: '5@test.com'
  })
})
