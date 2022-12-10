/**
 * @param {string} string
 * @return {string}
 */
function replaceAndOr(string) {
  const regex = /\b(and|or)\b(?=(?:[^"]*"[^"]*")*[^"]*$)/g;
  return string.replace(regex, x => x.toUpperCase());
}

module.exports = replaceAndOr;
