# Intuition
We can implement a simplified version of a Trie using a Set data structure. The Set is used to store words and perform insert, search, and startsWith operations. This solution is not as efficient as a proper Trie implementation but will work for small datasets and cases where performance is not critical.

# Approach
1.  The constructor initializes a Set called `store`.
2.  The `insert` method adds a word to the `store`.
3.  The `search` method checks if a word is present in the `store`.
4.  The `startsWith` method iterates through all words in the `store` to check if any of them starts with the given prefix.

# Complexity
*   Time complexity:
    
    *   Insert: $$O(1)$$, since adding an element to a set takes constant time.
    *   Search: $$O(1)$$, we use the hash set for search.
    *   StartsWith: $$O(n*m)$$, where n is the number of words in the set and m is the length of the longest word. This is because we need to iterate through all words in the set and check if they start with the given prefix.
*   Space complexity: $$O(n)$$, where n is the number of words.

# Code
```js
var Trie = function() {
  this.store = new Set();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.store.add(word);
  return null;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.store.has(word);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  for (let word of this.store.values()) {
    if (word.startsWith(prefix)) {
      return true;
    }
  }
  return false;
};
```