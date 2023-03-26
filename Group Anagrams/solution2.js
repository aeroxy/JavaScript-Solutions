/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const resultMap = {};
  const asciiValueOfA = 'a'.charCodeAt(0);
  for (let str of strs) {
    const hashArr = Array(26).fill(0);
    for (let char of str) {
      const index = char.charCodeAt(0) - asciiValueOfA;
      ++hashArr[index];
    }
    const hashKey = hashArr.join(',');
    resultMap[hashKey] = resultMap[hashKey] || [];
    resultMap[hashKey].push(str);
  }
  return Object.values(resultMap);
}

module.exports = groupAnagrams;