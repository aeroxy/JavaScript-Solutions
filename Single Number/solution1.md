# Intuition
The problem is to find the number which occurs only once in the given array. The given array has all the numbers repeated twice except for one number. The first thing that comes to mind is to use a Hash Set data structure to store the numbers that we have seen in the array. If we encounter a number that is already present in the Hash Set, then we can delete it from the set. Finally, the set should have only one element which would be the number that occurs only once.

# Approach
We will use a Hash Set to keep track of the numbers that we have seen in the given array. For each number in the array, we check if it is already present in the Hash Set. If it is present, we delete it from the set since it has occurred twice. If it is not present, we add it to the set. Finally, we return the only element in the Hash Set, which is the number that occurs only once.

# Complexity
- Time complexity: $$O(n)$$ since we iterate over the entire array once.
- Space complexity: $$O(n)$$ since we are using a Hash Set to store the numbers that we have seen.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const hashSet = new Set();
  for (let num of nums) {
    if (hashSet.has(num)) {
      hashSet.delete(num);
    } else {
      hashSet.add(num);
    }
  }
  return hashSet.values().next().value;
};
```