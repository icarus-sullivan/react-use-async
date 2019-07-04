import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useAsync } from '@sullivan/use-async';

const asyncFn = (delay) => new Promise((resolve) => {
    setTimeout(() => resolve({
      success: true,
    }), delay); 
});

const Example = () => {
    const [delay, setDelay] = useState(0);
    const { dispatch, ...state } = useAsync(asyncFn, delay);
    
    return (
        <div>
          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
          <button onClick={() => {
            setDelay(delay + 1000);
          }}>+1000 delay</button>
          <button onClick={dispatch}>Dispatch</button>
        </div>
    );
};

const root = document.createElement('div');
root.id = "root";
document.body.appendChild(root);

ReactDOM.render(<Example/>, document.getElementById('root'));
