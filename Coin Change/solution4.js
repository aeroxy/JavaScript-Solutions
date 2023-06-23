/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }

  const memo = [0];

  const dp = (coins, amount) => {
    let res = Infinity;
    for (let coin of coins) {
      if (amount < coin) {
        continue;
      }
      const nextAmount = amount - coin;
      const steps = memo[nextAmount] === undefined
        ? dp(coins, nextAmount)
        : memo[nextAmount];

      if (steps === Infinity) {
        continue;
      }
      res = Math.min(res, steps + 1);
    }
    memo[amount] = res;
    return res;
  }

  const result = dp(coins, amount);
  
  return result === Infinity ? -1 : result;
};

module.exports = coinChange;
