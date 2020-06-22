const getData = require('./getData');

// test('test Promise', () => {
//   getData(2).then(user => {
//     expect(user).toStrictEqual({
//       id: 1,
//       name: 'User5', //'User5'인데도 테스트 케이스가 통과한다..
//       email: '1@test.com'
//     })
//   })
// })

// 해결방법: return 문만 추가하면 된다.

test('test Promise', () => {
  return getData(1).then(user => {
    expect(user).toStrictEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com'
    })
  })
})