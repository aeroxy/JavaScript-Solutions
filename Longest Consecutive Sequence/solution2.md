# Intuition
The problem requires us to find the length of the longest consecutive sequence of numbers in an unsorted array. We need to solve this problem in linear time complexity. We can make use of a hash map to store the length of the consecutive sequence for each number. We can then iterate through the array and for each number, check if it's already in the hash map. If it is, we skip it since we have already processed it. Otherwise, we calculate the length of the consecutive sequence by looking up the lengths of the left and right sequences in the hash map. We update the maximum length found so far and add the length of the sequence to the hash map for the current number and its neighbors.

# Approach
1.  Create an empty hash map.
2.  Iterate through the input array.
3.  For each number in the array, check if it's already in the hash map.
4.  If it is, skip it since we have already processed it.
5.  Otherwise, calculate the length of the consecutive sequence by looking up the lengths of the left and right sequences in the hash map.
6.  Update the maximum length found so far.
7.  Add the length of the sequence to the hash map for the current number and its neighbors.
8.  Return the maximum length found.

# Complexity
- Time complexity: $$O(n)$$. We traverse the input array once and perform constant time operations for each element.

- Space complexity: $$O(n)$$. We use a hash map to store the length of consecutive sequences for each number.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const hashMap = {};
  let result = 0;
  for (let num of nums) {
    if (hashMap[num]) {
      continue;
    }
    const left = hashMap[num - 1] || 0;
    const right = hashMap[num + 1] || 0;
    const length = left + right + 1;
    result = Math.max(result, length);
    hashMap[num] = length;
    hashMap[num - left] = length;
    hashMap[num + right] = length;
  }
  return result;
};
```