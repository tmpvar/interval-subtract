# interval-subtract

subtract an interval from another where an interval is a 2 part array

extracted from [Implicit Solid Modeling Using Interval Methods](https://github.com/tmpvar/interval-min/files/76491/Implicit.Solid.Modeling.Using.Interval.Methods.pdf)

## install

`npm install interval-subtract`

## use 

```javascript
var isub = require('interval-subtract');

console.log(isub([1, 2], [3, 4]));
// output: [-3, -1]

console.log(isub([1, 2], [1, 2]));
// output: [0, 0]
```

### api signature

__isub__(`a`, `b`, `out`)

* `a` is the first interval
* `b` is the second interval
* `out` is an optional 2 part araray. Provide this to avoid generating garbage
* returns: 2 part array

## license 

[MIT](LICENSE.txt)
