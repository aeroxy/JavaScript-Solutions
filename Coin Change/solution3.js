/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }

  const memo = new Array(amount + 1).fill(Infinity);
  memo[0] = 0;

  for (const coin of coins) {
    for (let thisAmount = coin; thisAmount <= amount; ++thisAmount) {
      const nextAmount = thisAmount - coin;
      memo[thisAmount] = Math.min(
        memo[thisAmount], 
        memo[nextAmount]+ 1,
      );
    }
  }

  return memo[amount] === Infinity ? -1 : memo[amount];
};

module.exports = coinChange;
