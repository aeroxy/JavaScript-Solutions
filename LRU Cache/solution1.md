# Intuition
To implement the LRU cache, we need to keep track of the least recently used elements in the cache, and evict them when the cache reaches its maximum capacity. One way to do this is by using a doubly linked list and a hash table.

# Approach
We can implement the LRU cache using a doubly linked list and a hash table as follows:

- The doubly linked list will store the keys and values of the cache, in the order of their recent usage. The least recently used element will be at the end of the list.
- The hash table will map the keys to the corresponding nodes in the doubly linked list.
- When we access a key, we move its corresponding node to the front of the list, indicating that it is the most recently used element.
- When we insert a key-value pair, we create a new node and add it to the front of the list. If the cache exceeds its capacity, we remove the least recently used element from the end of the list and delete its corresponding entry in the hash table.

# Complexity
- Time complexity: The time complexity of `get()` and `put()` methods is $$O(1)$$, since accessing an element in the hash table takes constant time, and moving a node to the front of the list or removing a node from the end of the list takes constant time as well.
- Space complexity: The space complexity of the cache is $$O(capacity)$$, since we store at most `capacity` nodes in the doubly linked list and at most `capacity` entries in the hash table.

# Code
```js
class Node {
  /** 
   * @param {number} val
   * @param {Node} prev
   * @param {Node} next
   * @return {void}
   */
  constructor(key = 0, val = 0, prev = null, next = null) {
    this.key = key;
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cap = capacity;
  this.first = new Node(Infinity, Infinity);
  this.last = new Node(-Infinity, -Infinity);
  this.first.next = this.last;
  this.last.prev = this.first;
  this.cache = new Map([
    [this.first.key, this.first],
    [this.last.key, this.last],
  ]);
};

/** 
 * @param {Node} node
 * @return {void}
 */
LRUCache.prototype.insert = function (node) {
  node.prev = null;
  node.next = this.first;
  this.first.prev = node;
  this.first = node;
};

/** 
 * @param {Node} node
 * @return {void}
 */
LRUCache.prototype.remove = function (node) {
  const { prev, next } = node;
  if (prev && next) {
    [prev.next, next.prev] = [next, prev];
  } else if (prev) {
    prev.next = null;
    this.last = prev;
  } else if (next) {
    next.prev = null;
    this.first = next;
  }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.cache.get(key);
  if (!node) {
    return -1;
  }
  this.remove(node);
  this.insert(node);
  return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new Node(key, value);
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }
  this.insert(node);
  this.cache.set(key, node);
  const n = this.cache.size - this.cap;
  for (i = 0; i < n; ++i) {
    this.cache.delete(this.last.key);
    this.remove(this.last);
  }
  return null;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```