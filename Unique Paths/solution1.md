# Intuition

The problem asks us to find the total number of unique paths that can be taken to reach the bottom-right corner of a `m` x `n` grid, starting from the top-left corner. The robot can only move right or down at any point in time.

One way to solve this problem is by using combinatorics. Since we need to count the total number of unique paths, we can use the concept of combinations to count the number of ways to choose `m-1` movements to the right and `n-1` movements down (or equivalently, `n-1` movements down and `m-1` movements to the right).

# Approach

The approach used in the provided code is based on combinatorics. It uses the formula for calculating the binomial coefficient (also known as the combination) to calculate the total number of unique paths that can be taken.

The `binomialCoefficient()` function calculates the binomial coefficient using the formula `(n choose r) = n! / (r! * (n-r)!)`, which is the number of ways to choose `r` items from a set of `n` items. In our case, we can interpret this as the number of ways to choose `moveDown` (or `moveRight`) movements out of `moveRight + moveDown` total movements.

The `uniquePaths()` function first calculates the number of movements to the right (`moveRight`) and down (`moveDown`) required to reach the bottom-right corner of the grid. It then calls the `binomialCoefficient()` function to calculate the total number of unique paths, and returns the result.

# Complexity
- Time complexity: $$O(r)$$ because it loops `r` times to calculate the product of `(n+1-i)/i`. Since `r` is at most equal to `m-1` or `n-1`, the time complexity is $$O(min(m-1,n-1))$$

- Space complexity: $$O(1)$$ because it only uses a constant amount of memory to store the loop index and the result.

# Code
```js
/**
 * @param {number} n
 * @param {number} r
 * @return {number}
 */
function binomialCoefficient(n, r) {
  let result = 1;
  for (let i = 1; i <= r; i++) {
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
```