# Intuition
The problem can be solved using a backtracking algorithm. We can start at each cell of the board and recursively explore all possible paths to find the word. If we encounter a cell that does not match the current character of the word or we have already visited the cell, we backtrack and try a different path. If we have explored all possible paths and haven't found the word, we return false.

# Approach
We use a backtracking function `backtrack` that takes as input the current row, column and the index of the current character of the word. The function first checks if we have already visited the current cell, if so it returns false. Otherwise, if the current cell matches the current character of the word, we mark the cell as visited and recursively explore all the neighbors of the cell. If any of the recursive calls return true, we return true. If all the recursive calls return false, we backtrack by unmarking the cell as visited and return false.

We iterate over all the cells of the board and call the `backtrack` function starting from each cell. If `backtrack` returns true for any of the starting cells, we return true. Otherwise, we return false.

# Complexity
- Time complexity: The worst-case time complexity of the algorithm is $$O(m*n*4^k)$$, where `m` is the number of rows of the board, `n` is the number of columns of the board, and `k` is the length of the word. This is because for each cell of the board, we explore at most 4 directions and the maximum length of the recursion tree is `k`. In practice, the time complexity is much lower as we backtrack early when we encounter a cell that does not match the current character of the word.

- Space complexity: The worst-case space complexity of the algorithm is $$O(k)$$, where `k` is the length of the word. This is because we use a hash set to store the visited cells, and the maximum number of cells visited at any point in time is `k`.

# Code
```js
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
function exist(board, word) {
  const hashSet = new Set();
  const backtrack = (row, col, i) => {
    const hashKey = `${row},${col}`;
    if (hashSet.has(hashKey)) {
      return false;
    }
    if (board[row]?.[col] === word[i]) {
      hashSet.add(hashKey);
      ++i;
      if (word[i] === undefined) {
        return true;
      }
      const up = backtrack(row - 1, col, i);
      const left = backtrack(row, col - 1, i);
      const down = backtrack(row + 1, col, i);
      const right = backtrack(row, col + 1, i);
      if (up || left || down || right) {
        return true;
      } else {
        hashSet.delete(hashKey);
        return false;
      }
    }
    return false;
  };

  for (let row = 0; row < board.length; ++row) {
    for (let col = 0; col < board[row].length; ++col) {
      if (backtrack(row, col, 0)) {
        return true;
      }
      hashSet.clear();
    }
  }

  return false;
}
```