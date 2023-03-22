/**
 * @param {function} funcs
 * @param {number} concurrency
 * @return {object}
 */
async function pipeline(funcs, concurrency) {
  let fulfilled = 0;
  let rejected = 0;
  let workers = [];
  const maxWorkers = funcs.length < concurrency ? funcs.length : concurrency;

  const generateWorker = () => {
    const promise = funcs.shift()()

    return promise.then(() => {
      ++fulfilled;
    }).catch(() => {
      ++rejected;
    }).then(() => {
      if (funcs.length) {
        return generateWorker();
      }
    });
  }

  for (let i = 0; i < maxWorkers; ++i) {
    workers.push(generateWorker());
  }

  await Promise.all(workers);

  return {
    fulfilled,
    rejected,
  };
}

module.exports = pipeline;