/*
| Flag | Name            | Meaning                                                               |
| ---- | --------------- | --------------------------------------------------------------------- |
| `g`  | **Global**      | Match **all** occurrences, not just the first                         |
| `i`  | **Ignore Case** | Case-insensitive matching (e.g., `A` = `a`)                           |
| `m`  | **Multiline**   | Treat `^` and `$` as start/end of **each line**, not whole string     |
| `s`  | **Dotall**      | Allows `.` to match newline characters (`\n`)                         |
| `u`  | **Unicode**     | Enables full Unicode matching (e.g., emoji, special symbols)          |
| `y`  | **Sticky**      | Matches from exact position (`lastIndex`) only (rarely used manually) |
* */

//g – Global
const str = "cat bat cat";
console.log(str.match(/cat/));     // ➜ [ 'cat', index: 0, ... ]
console.log(str.match(/cat/g));    // ➜ [ 'cat', 'cat' ]

//i – Ignore Case
const str1 = "Hello hELLo HELlo";
console.log(str1.match(/hello/));     // ➜ null (no exact lowercase "hello")
console.log(str1.match(/hello/i));    // ➜ [ 'Hello' ]
console.log(str1.match(/hello/gi));   // ➜ [ 'Hello', 'hELLo', 'HELlo' ]

//m – Multiline
//^ matches start of each line
//$ matches end of each line
const text = `first line
second line`;
console.log(text.match(/^second/));     // ➜ null
console.log(text.match(/^second/m));    // ➜ [ 'second' ]

//s – DotAll
const str2 = "line1\nline2";
console.log(str2.match(/line1.line2/));    // ➜ null
console.log(str2.match(/line1.line2/s));   // ➜ [ 'line1\nline2' ]

//u – Unicode
const emoji = '💩';
console.log(/./.test(emoji));      // ➜ false (because emoji is 2 code units)
console.log(/./u.test(emoji));     // ➜ true

//y – Sticky
const str3 = 'abc abc';

const regex1 = /abc/y;
regex1.lastIndex = 4;
console.log(regex1.test(str3));    // ➜ false (no match at index 4)

const regex2 = /abc/y;
regex2.lastIndex = 4;
console.log(regex2.test(str3.slice(4)));  // ➜ true (if we adjust input)
