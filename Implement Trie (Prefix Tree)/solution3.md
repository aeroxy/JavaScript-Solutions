# Intuition
To solve this problem, we can implement a Trie data structure that supports three operations: insert, search, and startsWith. A Trie is a tree-like structure that is used to store a dynamic set or associative array where the keys are usually strings. Each node in the Trie can have multiple children, and the edge connecting each node represents a character in a string. In this case, we will create a JavaScript object for each node with its properties representing the children nodes.

# Approach
1.  Initialize the Trie by creating an empty object (this.store) as the root node.
2.  Implement the insert method:
    *   Start at the root node.
    *   Iterate through the characters of the input word.
    *   For each character, check if the node has a child with the same character. If not, create a new object as a child node.
    *   Move to the child node and repeat the process until the end of the word.
    *   Mark the end of the word by setting the 'end' property of the last node to true.
3.  Implement the search method:
    *   Start at the root node.
    *   Iterate through the characters of the input word.
    *   For each character, check if the node has a child with the same character. If not, return false.
    *   Move to the child node and repeat the process until the end of the word.
    *   Return true if the 'end' property of the last node is true, otherwise return false.
4.  Implement the startsWith method:
    *   Start at the root node.
    *   Iterate through the characters of the input prefix.
    *   For each character, check if the node has a child with the same character. If not, return false.
    *   Move to the child node and repeat the process until the end of the prefix.
    *   Return true after the iteration.

# Complexity
*   Time complexity:
    *   Insert: $$O(n)$$, where n is the length of the word being inserted.
    *   Search: $$O(n)$$, where n is the length of the word being searched.
    *   StartsWith: $$O(n)$$, where n is the length of the prefix being searched.
*   Space complexity: $$O(n*m)$$, where n is the total number of words and the m is the average length of the words. The space complexity depends on the number of words and their lengths stored in the Trie.

# Code
```js
var Trie = function() {
  this.store = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.store;
  for (let i = 0; i < word.length; ++i) {
    const letter = word[i];
    node[letter] = node[letter] ?? {};
    node = node[letter];
  }
  node.end = true;
  return null;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.store;
  for (let i = 0; i < word.length; ++i) {
    const letter = word[i];
    if (!node[letter]) {
      return false;
    }
    node = node[letter];
  }
  return Boolean(node.end);
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.store;
  for (let i = 0; i < prefix.length; ++i) {
    const letter = prefix[i];
    if (!node[letter]) {
      return false;
    }
    node = node[letter];
  }
  return true;
};
```