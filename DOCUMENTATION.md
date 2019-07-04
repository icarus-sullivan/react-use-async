
# useAsync(call[, params]) => T

* call `AsyncFunction`
* params `VarArgs` to be passed to `call` 

# T
| Property | Type | Description | 
|--|--|--|
| loading | boolean | Whether the call is has finished |
| data | any | The response from the async call |
| error | Error | Any error that occured during the async call |
| dispatch | Function | Kicks off the async call |


# withAsync(call[, params]) => HOC

* call `AsyncFunction`
* params `VarArgs` to be passed to `call` 

# HOC(React.Component || Function) 