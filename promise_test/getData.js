function getData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('wait 1 second!');

      const user = {
        id,
        name: `User${id}`,
        email: `${id}@test.com`
      };

      resolve(user);
    }, 1000)
  });
}

module.exports = getData;
