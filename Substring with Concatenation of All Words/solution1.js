/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
  const result = [];
  const frequency = new Map();
  const lettersCount = words[0].length;
  const wordsCount = words.length;

  for (const word of words){
    frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }

  const stringLength = s.length;
  for (let index = 0; index < stringLength; index++) {
    const seenWords = new Map();
    for (let pointer = 0; pointer < wordsCount; pointer++) {
      const wordBegin = pointer * lettersCount + index;
      const word = s.substr(wordBegin, lettersCount);

      if (!frequency.has(word)) {
        break;
      }

      seenWords.set(word, (seenWords.get(word) ?? 0) + 1);

      if (seenWords.get(word) > frequency.get(word)) {
        break;
      }

      if (pointer === wordsCount - 1) {
        result.push(index);
      }
    }
  }

  return result;
};

module.exports = findSubstring;