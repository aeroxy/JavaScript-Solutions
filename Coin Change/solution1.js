/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }

  const memo = {
    '0': 0,
  };

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

      if (steps === -1) {
        continue;
      }
      res = Math.min(res, steps + 1);
    }
    res = res === Infinity ? -1 : res;
    memo[amount] = res;
    return res;
  }
  
  return dp(coins, amount);
};

module.exports = coinChange;
