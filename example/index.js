import React, { useState } from 'react';
import { render } from 'react-dom';
import useAsync from '@sullivan/use-async';

const sleep = (delay) =>
  new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          success: true,
        }),
      delay,
    );
  });

const Render = () => {
  const [delay, setDelay] = useState(0);
  const { dispatch, ...state } = useAsync(sleep, {
    debounce: 250,
    memoize: true,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        onClick={() => {
          setDelay(delay + 1000);
        }}
      >
        +1000 delay
      </button>
      <button onClick={() => dispatch(delay)}>Dispatch</button>
    </div>
  );
};

render(<Render />, document.body);
