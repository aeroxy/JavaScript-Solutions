const migratoryBirds = arr => {
  const map = arr.reduce((acc, cur) => {
      if (!acc[cur]) {
          acc[cur] = 0;
      }
      ++acc[cur];
      return acc;
  }, {});
  const result = Object.keys(map).reduce((acc, cur) => {
      if (map[cur] > acc.num) {
          return {
              type: cur,
              num: map[cur]
          }
      }
      return acc;
  }, {
      type: 0,
      num: 0
  });
  return result.type;
}

module.exports = migratoryBirds;