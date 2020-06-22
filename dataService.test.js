const data = require('./data');
const dataService = require('./dataService');

beforeEach(() => {
  data.users.push({
    id: 1,
    name: 'User1',
    email: 'User1@test.com'
  },
  {
    id: 2,
    name: 'User2',
    email: 'User2@test.com'
  },
  {
    id: 3,
    name: 'User3',
    email: 'User3@test.com'
  });
})

afterEach(() => {
  data.users.splice(0);
})

describe('group1', () => {
  test('test dataService.findAll()', () => {
    const dataList = dataService.findAll();
  
    expect(dataList).toHaveLength(3);
    // reference type은 toContain이 아닌, toContainEqual인가보다..!
    
    expect(dataList).toContainEqual({
      id: 1,
      name: 'User1',
      email: 'User1@test.com'
    });
    expect(dataList).toContainEqual({
      id: 2,
      name: 'User2',
      email: 'User2@test.com'
    });
    expect(dataList).toContainEqual({
      id: 3,
      name: 'User3',
      email: 'User3@test.com'
    });
    expect(dataList).not.toContainEqual({
      id: 4,
      name: 'User4',
      email: 'User4@test.com'
    });
  });
})


test('test dataService.create()', () => {
  const user = {
    id: 777,
    name: 'User777',
    email: 'User777@test.com'
  };

  dataService.create(user);

  expect(data.users).toHaveLength(4);
  expect(data.users).toContainEqual({
    id: 777,
    name: 'User777',
    email: 'User777@test.com'
  });
});

