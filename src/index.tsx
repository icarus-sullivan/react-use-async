import React, { useReducer } from 'react';

interface Action {
  type: number,
  payload?: any,
};

interface Response {
  loading: boolean,
  data?: any,
  error?: Error,
  dispatch: Function,
}

const config = [
  () => ({ loading: true }),
  (data: any) => ({ loading: false, data }),
  (error: any) => ({ loading: false, error }),
];

const asyncReducer = (_: any, { type, payload }: Action) => config[type](payload);

export const useAsync = (fn: Function): Response => {
  const [state, _dispatch] = useReducer(asyncReducer, { 
    loading: false,
  });

  const dispatch = (...args: any[]) => {
    _dispatch({ type: 0 });
    Promise.resolve(fn(...args))
      .then((payload) => _dispatch({ type: 1, payload }))
      .catch((payload) => _dispatch({ type: 2, payload }));
  }

  return {
    dispatch,
    ...state,
  };
};

export const withAsync = (fn: Function) => 
  (Component: any) =>
  (props: any) => {
    const asyncProps = useAsync(fn);
    return (
      <Component {...props} {...asyncProps} />
    );
  };
