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

module.exports = Trie;