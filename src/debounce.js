const DEFAULT_DEBOUNCE = 250;

export default (original, millis = DEFAULT_DEBOUNCE) => {
  let pid;

  return (...args) =>
    new Promise((resolve) => {
      const invoke = () =>
        Promise.resolve(original(...args)).then((res) => {
          pid = null;
          resolve(res);
        });

      clearTimeout(pid);
      pid = setTimeout(invoke, pid === undefined ? 0 : millis);
    });
};
