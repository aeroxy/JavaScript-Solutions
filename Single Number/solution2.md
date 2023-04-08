# Intuition
We can the XOR operator to solve the problem. XOR stands for "exclusive or", which is a logical operator that returns true if and only if one of its operands is true, and false otherwise. In the context of binary numbers, the XOR operator returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.

For example, consider the following binary numbers:

```
1010
1101
------XOR
0111
```

In this case, the XOR operator returns 0111, which is the binary representation of 7 in decimal notation. This is because the first and third bits of the first operand are different from the second and fourth bits of the second operand.

Now, let's consider the problem at hand. We are given an array of numbers, where all the numbers occur twice except for one number, which occurs only once. We can use the fact that the XOR operator returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s to our advantage. If we XOR a number with itself, the result will be 0, since all the corresponding bits will be the same. Therefore, if we XOR all the numbers in the array, the numbers that occurred twice will cancel each other out, leaving only the number that occurred only once.

For example, consider the following array:

`[1, 2, 3, 2, 1]`

If we XOR all the numbers in the array, we get:

`1 ^ 2 ^ 3 ^ 2 ^ 1 = (1 ^ 1) ^ (2 ^ 2) ^ 3 = 0 ^ 0 ^ 3 = 3`

In this case, the only number that occurred only once in the array is 3, which is the result of the XOR operation.

Therefore, we can use the XOR operator to efficiently solve this problem in linear time and constant space complexity.

# Approach
In this solution, we use the reduce method to XOR all the numbers in the array. We initialize the accumulator to 0 and then XOR it with each number in the array. Finally, we return the value of the accumulator, which is the number that occurred only once.

# Complexity
- Time complexity: $$O(n)$$ since we iterate over the entire array once.

- Space complexity: $$O(1)$$ since we only use a constant amount of extra space for the accumulator variable.

# Code
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((acc, cur) => (acc ^= cur), 0);
};
```