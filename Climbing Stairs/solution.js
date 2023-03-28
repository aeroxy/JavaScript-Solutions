/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const steps = Array.from({ length: n }, () => 0);
  const lastIndex = n - 1;

  for (let i = 0; i < lastIndex; ++i) {
    steps[i + 1] = steps[i] + (steps[i - 1] || 0) + 1;
    steps[i + 2] = steps[i + 1] + steps[i] + 1;
  }

  return steps[lastIndex] + 1;
}

module.exports = climbStairs;