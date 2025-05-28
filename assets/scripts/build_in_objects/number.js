const x = new Number(34);
const y = new Number('34');
console.log(x+y);//68

console.log(Number.MAX_VALUE)//1.7976931348623157e+308
console.log(Number.MIN_VALUE)//5e-324

console.log(isNaN("23"))//false
console.log(isNaN("asd"))//true
console.log(isNaN(23))//false

console.log("skdjf".toString())//skdjf
console.log("123".toString())//123

console.log(0.2 + 0.4);//0.6000000000000001
console.log(0.2 + 0.1 === 0.3);//false
