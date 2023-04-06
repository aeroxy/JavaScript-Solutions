/**
 * @param {string} string
 * @return {string}
 */
var solution = function (string) {
  return string.replace(/\[\"(\S+)\"\]|\[\'(\S+)\'\]|\[(\d+)\]/g, '.$1$2$3');
};

module.exports = solution;