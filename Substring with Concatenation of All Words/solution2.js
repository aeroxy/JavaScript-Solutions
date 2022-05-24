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
  const substringSize = lettersCount * wordsCount;
  const stringLength = s.length;

  for (const word of words){
    frequency.set(word, (frequency.get(word) ?? 0) + 1);
  }

  const maxStarter = stringLength - substringSize;
  const maxPointer = stringLength - lettersCount;

  let starter = 0;
  let pointer = 0;
  let wordsFound = 0;
  const tmp = new Map();
  const reset = () => {
    starter += 1;
    pointer = starter;
    wordsFound = 0;
    tmp.clear();
  };
  while (starter <= maxStarter || pointer <= maxPointer) {
    const currentWord = s.substr(pointer, lettersCount);
    if (!frequency.has(currentWord)) {
      reset();
      continue;
    }
    tmp.set(
      currentWord,
      (tmp.get(currentWord) ?? 0) + 1,
    );
    if (tmp.get(currentWord) > frequency.get(currentWord)) {
      reset();
      continue;
    }
    wordsFound++;
    if (wordsFound === wordsCount) {
      result.push(starter);
      reset();
      continue;
    }
    pointer += lettersCount;
  }
  return result;
};

module.exports = findSubstring;