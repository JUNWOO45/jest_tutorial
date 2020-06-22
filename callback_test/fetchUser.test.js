const fetchUser = require('./fetchUser');

// 밑의 테스트는 동작하지 않는다.
// Jest Runner는 테스트함수를 최대한 빨리 호출해서 성능을 끌어올리려고 한다.
// 콜백함수는 호출조차 되지 못한다. -> toEqual이라는 Matcher함수 또한 호출되지 못한다.

// test('test asynchronous Func', () => {
//   fetchUser(1, user => {
//     expect(user).toEqual({
//       id: 1,
//       name: 'User1',
//       email: '1@test.com'
//     })
//   })
// });
      
// 해결방법: Jest Runner에게 이 테스트 함수는 비동기 코드를 테스트하니 콜백 함수가 호출되는지도 봐주라고 알려주어야한다.
// 테스트 함수가 done 인자를 받고, 이 done함수를 콜백함수의 마지막에 호출하도록 해야한다.
test('test asynchronous Func', (done) => {
  fetchUser(1, user => {
    expect(user).toEqual({
      id: 1,
      name: 'User1',
      email: '1@test.com'
    })

    done()
  })
});
