function fetchUser(id, cb) {
  setTimeout(() => {
    console.log('setTimeout start!');

    const user = {
      id,
      name: 'User'+id,
      email: `${id}@test.com`
    };

    cb(user);
  }, 100);
}

module.exports = fetchUser;
