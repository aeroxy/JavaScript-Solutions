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

module.exports = MinStack;