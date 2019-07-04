![npm version](https://img.shields.io/npm/v/@sullivan/use-async.svg) ![npm license](https://img.shields.io/npm/l/@sullivan/use-async.svg)

# @sullivan/use-async
Dynamic asynchronous operations for React 16.8+. 

## Installation
```
npm install --save @sullivan/use-async
```
or
```
yarn add @sullivan/use-async
```


# Usage
Example usage is describe below, [click here](https://github.com/icarus-sullivan/react-use-async/blob/master/DOCUMENTATION.md) for additional api documentation.  

### useAync
useAnyc is used to call any function in an asynchronous manner. 
```javascript
import React from 'react';
import { useAsync } from '@sullivan/use-async';

const asyncFn = (delay) => new Promise((resolve) => {
  setTimeout(resolve, delay); 
});

const Example = (props) => {
  const { loading, data, error, dispatch } = useAsync(asyncFn, 1000);
  
  return (
    <div onClick={dispatch}>
      <h1>{loading ? 'Loading' : 'Done'}</h1>
    </div>
  );
};
```

### Dynamic params: useAsync
Using other hooks, you can dynamically update the useAsync params.  
```javascript
import React, { useState } from 'react';
import { useAsync } from '@sullivan/use-async';

const asyncFn = (delay) => new Promise((resolve) => {
  setTimeout(resolve, delay); 
});

const Example = (props) => {
  const [delay, setDelay] = useState(0);
  const { loading, data, error, dispatch } = useAsync(asyncFn, delay);
  
  return (
    <div onClick={() => {
      setDelay(delay + 1000);
      dispatch();
    }}>
      <h1>{loading ? 'Loading' : 'Done'}</h1>
    </div>
  );

  return null;
};
```

### withAsync
Injects useAsync data into your Components props

```javascript
import React from 'react';
import { withAsync } from '@sullivan/use-async';

const FetchButton = ({ dispatch, data, loading, error, ...props }) => (
  <div>
    <pre>{JSON.stringify({ data, error })}</pre>
    <button onClick={dispatch}>{loading ? 'Loading' : 'Request' }</button>
  </div>
);

export default withAsync(fetch, 'https://github.com')(FetchButton);

```
# Dynamic Args: withAysnc 
Using the component above, we can dynamically modify its args. 
```javascript
import React from 'react';
import FetchButton from 'components/FetchButton';

const Example = (props) => (
  <div>
    <FetchButton args={['https://www.npmjs.com/package/@sullivan/use-async']} />
  </div>
);

export default Example;

```

* Please note, the async function is not immediately invoked. To call it use the `dispatch` function. 