# str2bool
Map data like boolean to true / false of type boolean

| 类型和值 | 修改为 |
| --- | --- |
| "true" (String) | true(boolean) |
| "false" (String) | false(boolean) |
| true (boolean) | true(boolean) |
| false (boolean) | false(boolean) |
| "1" (String) | true(boolean) |
| "0" (String) | false(boolean) |
| 1 (int) | true(boolean) |
| 0 (int) | false(boolean) |

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

