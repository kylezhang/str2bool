# str2bool
Converts a string or number like boolean to true / false of type boolean.

# install
`npm install str2bool --save`

# test
`npm test`

# Usage
```
const str2bool = require('str2bool');

console.log(str2bool(true)); // true
console.log(str2bool('true')); // true
console.log(str2bool(1)); // true
console.log(str2bool('1')); // true

console.log(str2bool(false)); // false
console.log(str2bool('false')); // fasle
console.log(str2bool(0)); // false
console.log(str2bool('0')); // false

console.log(str2bool('true ')); // false
console.log(str2bool(223)); // false
console.log(str2bool('223')); // false
console.log(str2bool('')); // false
console.log(str2bool(' ')); // false
console.log(str2bool()); // false
```

