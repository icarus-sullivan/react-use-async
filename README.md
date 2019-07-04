![npm version](https://img.shields.io/npm/v/@sullivan/use-async.svg) ![npm license](https://img.shields.io/npm/l/@sullivan/use-async.svg)

# @sullivan/use-async
Dynamic asynchronous operations for React 16.8+. 

### Installation
```
npm install --save @sullivan/use-async
```
or
```
yarn add @sullivan/use-async
```

# useAsync(call[, params]) => <T>

* call <AsyncFunction> 
* params <VarArgs> to be passed to `call` 

# <T>
| Property | Type | Description | 
|--|--|--|
| loading | boolean | Whether the call is has finished |
| data | any | The response from the async call |
| error | Error | Any error that occured during the async call |
| dispatch | Function | Kicks off the async call |

### Usage
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

### Dynamic Param Usage 
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

* Please note, the async function is not immediately invoked. To call it use the `dispatch` function. 