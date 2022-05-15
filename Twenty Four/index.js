const vm = require('vm');

const operators = ['+', '-', '*', '/'];

const main = (a, b, c, d, e) => {
  const context = { a, b, c, d, e };
  vm.createContext(context);
  for (let i = 0; i < 4; ++i) {
    for (let j = 0; j < 4; ++j) {
      for (let k = 0; k < 4; ++k) {
        for (let o = 0; o < 4; ++o) {
          const calculation = `${a}${operators[i]}${b}${operators[j]}${c}${operators[k]}${d}${operators[o]}${e}`;
          const code = `var result = ${calculation}`;
          vm.runInContext(code, context);
          if (context.result === 24) {
            return calculation;
          }
        }
      }
    }
  }
  return false;
}

console.log(main(5,5,5,5,5));

module.exports = main;