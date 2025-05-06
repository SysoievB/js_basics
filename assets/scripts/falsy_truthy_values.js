//Falsy & Truthy values
if (!0) console.log('zero is falsy');
if (1) console.log('any other number is truthy');
if (-100) console.log('any other even negative number is truthy');
if (!"") console.log('empty string is falsy');
if (!``) console.log('empty string is falsy');
if (!'') console.log('empty string is falsy');
if (" ") console.log('space is truthy');
if ([]) console.log('empty array is truthy');
if ({}) console.log('Object is truthy');
if (!null) console.log('null is falsy');
if (!undefined) console.log('undefined is falsy');
if (!NaN) console.log('NaN is falsy');
