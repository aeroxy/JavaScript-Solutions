const expect = require("../test/expect");
const method = require("./solution2");
const assert = require("assert");

function testMethod(input, output) {
  const result = method(...input);
  const resultJSONStr = result.map((arr) => JSON.stringify(arr.sort())).sort();
  const outputJSONStr = output.map((arr) => JSON.stringify(arr.sort())).sort();
  return assert.deepEqual(resultJSONStr, outputJSONStr);
}

module.exports = {
  testCases: [
    () => expect(
      [["eat", "tea", "tan", "ate", "nat", "bat"]],
      [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
      testMethod,
    ),
    () => expect(
      [[""]],
      [[""]],
      testMethod,
    ),
    () => expect(
      [["a"]],
      [["a"]],
      testMethod,
    ),
    () => expect(
      [["bdddddddddd","bbbbbbbbbbc"]],
      [["bbbbbbbbbbc"],["bdddddddddd"]],
      testMethod,
    ),
    () => expect(
      [["ac","d"]],
      [["d"],["ac"]],
      testMethod,
    ),
    () => expect(
      [["tho","tin","erg","end","pug","ton","alb","mes","job","ads","soy","toe","tap","sen","ape","led","rig","rig","con","wac","gog","zen","hay","lie","pay","kid","oaf","arc","hay","vet","sat","gap","hop","ben","gem","dem","pie","eco","cub","coy","pep","wot","wee"]],
      [["wee"],["pep"],["cub"],["eco"],["dem"],["gap"],["vet"],["job"],["ben"],["toe"],["hay","hay"],["mes"],["ads"],["alb"],["wot"],["gem"],["oaf"],["hop"],["ton"],["pug"],["end"],["con"],["coy"],["sat"],["soy"],["pay"],["tin"],["pie"],["ape"],["tho"],["erg"],["sen"],["rig","rig"],["tap"],["wac"],["gog"],["led"],["zen"],["arc"],["lie"],["kid"]],
      testMethod,
    ),
  ],
};
