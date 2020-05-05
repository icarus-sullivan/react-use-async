export default (original) => {
  if (typeof original !== 'function') {
    throw new Error('memoize requires a function as a first parameter');
  }

  const cache = {};

  return (...args) => {
    const n = args[0];
    if (n in cache) {
      return Promise.resolve(cache[n]);
    }

    return new Promise((resolve, reject) => {
      original(...args)
        .then((res) => {
          cache[n] = res;
          resolve(res);
        })
        .catch(reject);
    });
  };
};
