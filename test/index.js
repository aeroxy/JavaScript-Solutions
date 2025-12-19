const path = require('path');

const problemName = process.argv.slice(2).find(arg => !arg.startsWith('-') && arg !== 'test/index.js');

if (!problemName) {
  console.error('Please provide a problem name, e.g., bun run test "Rotary Lock II"');
  process.exit(1);
}

const casesPath = path.resolve(__dirname, '..', problemName, 'cases.js');

try {
  const { testCases } = require(casesPath);
  for (let test of testCases) {
    it(problemName, test);
  }
} catch (e) {
  console.error(`Could not load cases from ${casesPath}`);
  console.error(e.message);
  process.exit(1);
}