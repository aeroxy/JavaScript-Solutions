# Intuition
The problem requires us to implement a data structure called `MinStack` that supports push, pop, top and getMin operations. Additionally, the `getMin()` operation should be constant time. This requirement suggests that we need to keep track of the minimum element in the stack. One approach could be to use an additional stack to keep track of the minimum element at each step.

# Approach
We can maintain a stack of objects where each object stores the value and the minimum value of all the elements below it in the stack. When a new element is pushed onto the stack, we check if it is smaller than the minimum value of the previous element in the stack. If yes, we set the minimum value of the new element as the minimum value for the stack. Otherwise, we set the minimum value of the new element as the minimum value of the previous element.

When we pop an element, we simply remove it from the top of the stack. When we need to get the top element of the stack, we return the value of the top element. When we need to get the minimum value of the stack, we return the minimum value of the top element.

# Complexity
- Time complexity: The time complexity of push, pop, top, and getMin operations is $$O(1)$$.
- Space complexity: The space complexity of the stack is $$O(n)$$, where n is the number of elements in the stack.

# Code
```js
var MinStack = function() {
  this.stack = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  const min = Math.min(this.stack?.min ?? Infinity, val);
  const stack = {
    val,
    min,
    next: this.stack,
  };
  this.stack = stack;
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack = this.stack?.next ?? null;
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack?.val ?? null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.stack?.min ?? null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
```