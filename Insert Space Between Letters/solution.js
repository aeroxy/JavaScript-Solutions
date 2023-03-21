/**
 * @param {string} string
 * @return {string}
 */
function spacify(string) {
  const tmp = string.split('');
  for (let i = 0; i < tmp.length; ++i) {
    const j = i + 1;
    if (tmp[i] !== ' ' && tmp[j] !== ' ' && tmp[j]) {
      tmp.splice(j, 0, ' ');
    }
  }
  return tmp.join('');
}

module.exports = spacify;