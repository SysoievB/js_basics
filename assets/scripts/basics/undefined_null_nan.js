//undefined -> Not yet assigned a value
let a;
console.log(a); // ➜ undefined

function test() {}
console.log(test()); // ➜ undefined

//null -> Empty by intention (often used to reset or clear)
let b = null;
console.log(b)

//NaN -> Error in numeric conversion/calculation
let c = 1 - "hi";
console.log(c) // ➜ NaN

let d = parseInt("abc");
console.log(d) // ➜ NaN
