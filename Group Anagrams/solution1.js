/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const resultMap = {};
  for (let str of strs) {
    const sortedStr = str.split('').sort().join();
    resultMap[sortedStr] = resultMap[sortedStr] || [];
    resultMap[sortedStr].push(str);
  }
  return Object.values(resultMap);
}

module.exports = groupAnagrams;