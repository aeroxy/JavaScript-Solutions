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

module.exports = Trie;