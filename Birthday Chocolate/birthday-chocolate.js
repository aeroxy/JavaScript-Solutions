const birthday = (s, d, m) => {
  const length = s.length - m + 1;
  let count = 0;
  for (let i = 0; i < length; ++i) {
    if (d === s.slice(i, i + m).reduce((acc, cur) => acc + cur, 0)) {
      ++count;
    };
  }
  return count;
}

module.exports = birthday;