//Оператор возвращает значение левого операнда, если оно НЕ равно null и undefined.
//Иначе возвращается значение правого операнда.
const result = "hello" ?? "world";
console.log(result);    // hello

console.log(0 ?? 5);    // 0

console.log(null ?? "not null");    // not null

console.log(undefined ?? "defined");    // defined

console.log(null ?? null);  // null
console.log(undefined ?? undefined);    // undefined

//Оператор ??=
//Если левый операнд равен null и undefined, то ему присваивается значение правого операнда.
//Иначе левый операнд сохраняет свое значение.
const message = "Hello JavaScript";
let text = "Hello work!"
text ??= message;
console.log(text);  // Hello work!

const message1 = "Hello JavaScript";
let text1 = null;
text1 ??= message1;
console.log(text1);  // Hello JavaScript