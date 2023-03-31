# Intuition
The problem can be solved using the sliding window technique. We maintain a window of characters from the string `s` and keep expanding the window until we find all the characters in string `t`. Then, we start shrinking the window from the left end and update the minimum length of the window which contains all characters of `t`.

# Approach
1.  Create a frequency map of characters in string `t`.
2.  Initialize variables `have`, `need`, `start`, `end`, and `len`.
    *   `have` will keep track of the number of unique characters we have found so far in the window that match string `t`.
    *   `need` will keep track of the total number of unique characters in string `t`.
    *   `start` and `end` will keep track of the left and right end of the minimum length window.
    *   `len` will keep track of the minimum length of the window.
3.  Traverse the string `s` from left to right and update the frequency map of characters in the current window.
4.  If the current character `c` is present in the frequency map of string `t`, then increment the `have` variable if the frequency of `c` in the window matches the frequency of `c` in string `t`.
5.  If `have` equals `need`, then we have found all the characters of string `t` in the current window. We then update the `start`, `end`, and `len` variables.
6.  Shrink the window from the left end and update the frequency map of characters until we no longer have all characters of string `t`. Update the `have` variable if the frequency of the leftmost character of the window in the frequency map of string `t` is less than its frequency in the current window.
7.  Repeat steps 3-6 until we reach the end of string `s`.
8.  Return the substring of string `s` from index `start` to index `end + 1`.

# Complexity
- Time complexity: $$O(n)$$, where n is the length of the string `s`. We traverse the string `s` twice, once from left to right and once from right to left, so the time complexity is linear in the length of `s`.
- Space complexity: $$O(t)$$, where t is the length of the string `t`. We use a frequency map of characters in string `t` which has a space complexity of O(t).

# Code
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (!t) {
    return '';
  }

  const countT = new Map();
  const window = new Map();

  for (let c of t) {
    countT.set(c, (countT.get(c) ?? 0) + 1);
  }

  let have = 0;
  let need = countT.size;

  let start = -1;
  let end = -1;
  let len = Infinity;

  let l = 0;

  for (let r = 0; r < s.length; ++r) {
    const c = s[r];
    window.set(c, (window.get(c) ?? 0) + 1);

    if (countT.has(c) && countT.get(c) === window.get(c)) {
      ++have;
    }

    while (have === need) {
      const curLen = r - l;
      if (curLen < len) {
        start = l;
        end = r;
        len = curLen;
      }
      const lc = s[l];
      window.set(lc, window.get(lc) - 1);

      if (countT.has(lc) && countT.get(lc) > window.get(lc)) {
        --have;
      }
      ++l;
    }
  }

  return s.slice(start, end + 1);
};
```