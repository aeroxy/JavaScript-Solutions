/**
 * @param {string} string
 * @return {string}
 */
function replaceAndOr(string) {
  return string.replace(/".*?"|\w+/g, (x) => x.match(/^(?:and|or)$/i) ? x.toUpperCase() : x);
}

module.exports = replaceAndOr;
