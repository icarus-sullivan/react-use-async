![npm version](https://img.shields.io/npm/v/@sullivan/use-async.svg) ![npm license](https://img.shields.io/npm/l/@sullivan/use-async.svg)

# @sullivan/use-async
Hook friendly asynchronous operations for React 16.8+. 

## Installation
```
npm install --save @sullivan/use-async
```
or
```
yarn add @sullivan/use-async
```


## Usage

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

### Options

`useAsync(fn, options?) => Response`

| Option | Description | Type |
|--|--|--|
| debounce | Milliseconds to perform a debounce, ignores if unset | number |
| memoize | If memoization should be done | boolean |


### Response

| Field | Description |
|--|--|
| loading | If the async call is occuring | 
| error | Any error that was thrown |
| data | The success result of the async call | 
| dispatch | How to invoke the async function | 



----

## Changelog 
**1.0.0**

- Removed withAsync HOC
- Added options for debounce and memoization 