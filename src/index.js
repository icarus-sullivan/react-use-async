import { useReducer, useRef } from 'react';
import memoize from './memoize';
import debounce from './debounce';

const config = [
  ({ state = {} }) => ({ loading: true, data: state.data }),
  ({ payload }) => ({ loading: false, data: payload }),
  ({ payload }) => ({ loading: false, error: payload }),
];

const asyncReducer = (state, { type, payload }) =>
  config[type]({ state, payload });

const prepareFn = (original, options) => {
  let fn = original;
  if (options && options.debounce) {
    fn = debounce(fn, options.debounce);
  }
  if (options && options.memoize) {
    fn = memoize(fn);
  }
  return fn;
};

export default (fn, options = {}) => {
  const [state, _dispatch] = useReducer(asyncReducer, {
    loading: false,
  });

  const original = useRef(prepareFn(fn, options));
  const { current: dispatch } = useRef((...args) => {
    _dispatch({ type: 0 });
    Promise.resolve(original.current(...args))
      .then((payload) => _dispatch({ type: 1, payload }))
      .catch((payload) => _dispatch({ type: 2, payload }));
  });

  return {
    dispatch,
    ...state,
  };
};
