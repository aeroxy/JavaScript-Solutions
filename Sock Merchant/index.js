const main = (n, ar) => {
  const cache = new Map();
  let pairs = 0;
  for (let sock of ar) {
    if (cache.get(sock)) {
      ++pairs;
      cache.set(sock, false);
    } else {
      cache.set(sock, true);
    }
  }
  return pairs;
}

module.exports = main;