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


## Hook Usage

```javascript
import React from 'react';
import { useAsync } from '@sullivan/use-async';

const Example = (props) => {
  const { loading, data, error, dispatch } = useAsync(fetch);
  
  return (
    <div onClick={() => dispatch('some_url')}>
      <h1>{loading ? 'Loading' : 'Done'}</h1>
    </div>
  );
};
```

## Higher-Order-Component Usage

```javascript
import React from 'react';
import { withAsync } from '@sullivan/use-async';

const URL = 'https://www.npmjs.com/package/@sullivan/use-async';

const Example = ({ loading, data, error, dispatch, ...props }) => (
  <button onClick={() => dispatch(URL)} >
    Request Webpage
  </button>
);

export default withAsync(fetch)(Example);
```

