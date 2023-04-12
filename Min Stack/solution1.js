var MinStack = function() {
  this.stack = [];
  this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.min.push(Math.min(this.min[this.min.length - 1] ?? Infinity, val));
  this.stack.push(val);
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.min.pop();
  this.stack.pop();
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1] ?? null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1] ?? null;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack;