/**
 * @param {number} n
 * @param {number} r
 * @return {number}
 */
function binomialCoefficient(n, r) {
  let result = 1;
  for (let i = 1; i <= r; --i) {
    result *= (n + 1 - i) / i;
  }
  return result;
}

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const [
    moveRight,
    moveDown,
  ] = [
      m - 1,
      n - 1,
    ];

  const result = binomialCoefficient(moveRight + moveDown, moveDown);

  return Math.round(result);
}

module.exports = uniquePaths;