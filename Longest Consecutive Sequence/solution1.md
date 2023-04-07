# Intuition
The problem asks us to find the length of the longest consecutive sequence of numbers in an unsorted array. We need to find the sequence in $$O(n)$$ time complexity. We can make use of a hash set to optimize our approach. Since hash set has $$O(1)$$ time complexity for insertions and deletions, we can use it to keep track of the numbers we have seen so far. We can then iterate through the array and for each number, check if its predecessor and successor exist in the hash set. If they do, we know that the current number is part of a consecutive sequence. We can then count the length of the sequence and update the maximum length found so far.

# Approach
1.  Create a hash set and insert all the numbers of the input array.
2.  For each number in the input array, check if its predecessor and successor exist in the hash set.
3.  If they do, increment the length of the sequence and delete the number from the hash set.
4.  Keep track of the maximum length found so far.
5.  Return the maximum length found.

# Complexity
- Time complexity: $$O(n)$$. We traverse the input array once and perform $$O(1)$$ operations on the hash set for each element.

- Space complexity: $$O(n)$$. We create a hash set to store all the numbers of the input array.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const hashSet = new Set(nums);
  let result = 0;

  for (let num of nums) {
    if (!hashSet.has(num)) {
      continue;
    }

    hashSet.delete(num);

    let length = 1;
    let left = num - 1;
    let right = num + 1;

    while (hashSet.has(left)) {
      hashSet.delete(left);
      ++length;
      --left;
    }

    while (hashSet.has(right)) {
      hashSet.delete(right);
      ++length;
      ++right;
    }

    result = Math.max(result, length);
  }

  return result;
};
```