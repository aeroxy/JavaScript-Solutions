const expect = require("../test/expect");
const method = require("./solution");
const assert = require("assert");

async function testMethod(input, output) {
  const result = await method(...input);
  reset();
  return assert.equal(JSON.stringify(result), JSON.stringify(output));
}

const store = {
  concurrent: 0,
  foo: 'bar',
};

const sleep = (time) => new Promise((r) => setTimeout(r, time));

const a = (num) => async () => {
  ++store.concurrent;
  await sleep(100);
  if (store.concurrent !== num) {
    --store.concurrent;
    throw new Error();
  }
  await sleep(250);
  if (store.foo !== 'bar') {
    --store.concurrent;
    console.warn('a on error');
    throw new Error();
  }
  --store.concurrent;
}

const b = (num) => async () => {
  ++store.concurrent;
  await sleep(100);
  if (store.concurrent !== num) {
    --store.concurrent;
    throw new Error();
  }
  await sleep(500);
  store.foo = 'rab';
  --store.concurrent;
}

const c = (num) => async () => {
  ++store.concurrent;
  await sleep(100);
  if (store.concurrent !== num) {
    --store.concurrent;
    throw new Error();
  }
  await sleep(1000);
  if (store.foo !== 'rab') {
    --store.concurrent;
    console.warn('c on error');
    throw new Error();
  }
  store.foo = '';
  --store.concurrent;
}

const reset = () => {
  store.concurrent = 0;
  store.foo = 'bar';
}

module.exports = {
  testCases: [
    () => expect([[a(3), b(3), c(3)], 3], {
      fulfilled: 3,
      rejected: 0,
    }, testMethod),
    () => expect([[a(2), b(2), c(2)], 2], {
      fulfilled: 3,
      rejected: 0,
    }, testMethod),
    () => expect([[a(3), b(3), c(3)], 4], {
      fulfilled: 3,
      rejected: 0,
    }, testMethod),
    function() {
      this.timeout(10000);
      return expect([[c(1), a(1), b(1)], 1], {
        fulfilled: 2,
        rejected: 1,
      }, testMethod);
    },
    function() {
      this.timeout(10000);
      return expect([[c(1), b(1), a(1)], 1], {
        fulfilled: 1,
        rejected: 2,
      }, testMethod);
    },
  ],
};
