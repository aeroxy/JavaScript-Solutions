var Trie = function() {
  this.words = new Set();
  this.store = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.words.add(word);
  let node = this.store;
  for (let i = 0; i < word.length; ++i) {
    const letter = word[i];
    node[letter] = node[letter] ?? {};
    node = node[letter];
  }
  return null;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.words.has(word);
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