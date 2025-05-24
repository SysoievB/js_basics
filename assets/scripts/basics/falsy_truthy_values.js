//Falsy & Truthy values
if (!0) console.log('zero is falsy');
if (1) console.log('any other number is truthy');
if (-100) console.log('any other even negative number is truthy');
if (!"") console.log('empty string is falsy');
if (!``) console.log('empty string is falsy');
if (!'') console.log('empty string is falsy');
if (" ") console.log('space is truthy');
if ("abs") console.log('any string is truthy');
if ([]) console.log('empty array is truthy');
if ({}) console.log('Object is truthy');
if (!null) console.log('null is falsy');
if (!undefined) console.log('undefined is falsy');
if (!NaN) console.log('NaN is falsy');

console.log("-------------Logical Operators & How They Work-------------");
//The || operator returns that first value (first operand) if it is truthy.
const enteredValue1 = '';
const userName1 = enteredValue1 || 'DEFAULT';
console.log(userName1);//DEFAULT

const enteredValue2 = '';
const userName2 = enteredValue2 || null;
console.log(userName2);//null

const enteredValue3 = 'Max';
const userName3 = enteredValue3 || 'Anna';
console.log(userName3);//Max

//If the first value is truthy, the && operator ALWAYS returns the second value (second operand).
const enteredValue4 = 'Max';
const userName4 = enteredValue4 && 'Anna';
console.log(userName4);//Anna

const enteredValue5 = '';
const userName5 = enteredValue5 && 'Anna';
console.log(userName5);//''

const enteredValue6 = 'Max';
const userName6 = enteredValue6 && '';
console.log(userName6);//''

//! negates (inverts) a value AND always returns/ produces a boolean.
// So !'Max' would yield false (because 'Max' is truthy => negated + boolean = false).
// With the additional ! operator, the value is negated again, so false becomes true.
const userName7 = 'Max';
console.log(!!userName7);//true
console.log(!userName7);//false