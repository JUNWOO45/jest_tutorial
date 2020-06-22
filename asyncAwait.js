function getRankingData(id) {
  return new Promise((resolve, reject) => {
    const user = {
      id,
      name: getName(id) + id,
      email: `${getEmail(id)}@test.com`
    };

    resolve(user);
  })
}

function getName(id) {
  return 'User' + id;
}

function getEmail(id, name) {
  return id;
}

module.exports = getRankingData;
