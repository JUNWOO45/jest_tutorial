const data = require('./data');

const services = {
  findAll() {
    return data.users;
  },
  create(user) {
    data.users.push(user);
  },
  destroy(id) {
    data.users.splice(
      data.users.findIndex(user => user.id === id),
      1
    )
  },
  update(id, data) {
    data.users[data.users.findIndex(user => user.id === id)] = data;
  }
};

module.exports = services;
