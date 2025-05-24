let string = "Hello World";

console.log('---------------Basic Methods---------------')

//Returns the character at a specified index
console.log(string.charAt(1))//1

//Returns the UTF-16 code at a specified index
console.log(string.charCodeAt(1))//101

//Returns the character at the given index (supports negative indexing)
console.log(string.at(-1))//d

//Combines multiple strings
console.log(string.concat(" ", "World"))//Hello World World

//Checks if a string contains another string
console.log(string.includes("el"))//true

//Returns the first index of the match
console.log(string.indexOf("l"))//2

//Returns the last index of the match
console.log(string.lastIndexOf('r'))//8

//Checks if string starts with given substring
console.log(string.startsWith(`He`))//true

//Checks if string ends with given substring
console.log(string.endsWith(`World`))//true

//Extracts a section of a string
console.log(string.slice(6, 11))//World

//Similar to `slice`, but doesn’t accept negative indexes
console.log(string.substring(6, 11))//World

//Deprecated, similar to `slice`
console.log(string.substr(6, 11))//World


console.log('---------------Modification Methods---------------')

//Converts the string to lowercase
console.log(string.toLowerCase())//hello world

//Converts the string to uppercase
console.log(string.toUpperCase())//HELLO WORLD

//Removes whitespace from both ends
console.log('       AB CC       '.trim().concat("!"))//AB CC!

//Removes whitespace from the start
console.log('       AB CC       '.trimStart().concat("!"))//AB CC       !

//`trimEnd()` / `trimRight()` -- Removes whitespace from the end
console.log('       AB CC       '.trimEnd().concat("!"))//       AB CC!

//Replaces first match (string or RegExp)
console.log('Hello World'.replace('World', 'Earth'))//Hello Earth

// | `replaceAll(search, replace)`       | Replaces all matches
console.log('Hello World'.replaceAll('World', 'Earth'))//Hello Earth

//Pads from the start
//Original: 'Hello' (length 5)
//Target: 10 → add 5 spaces to the start
console.log('Hello'.padStart(10, ' '))//     Hello

//Pads from the end
console.log('Hello'.padEnd(10, ' ').concat('World'))//Hello     World

//Repeats the string `count` times
console.log('Hello World'.repeat(3))//Hello WorldHello WorldHello World

console.log('---------------Splitting and Matching---------------')

//Splits a string into an array
string.split(' ').forEach(word => console.log(word))
//Hello
//World

//Returns result of matching regex
console.log('Hello World'.match(/[A-Za-z]/g))//['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']

//Returns an iterator for all matches (ES2020)
'Hello World'.matchAll(/[A-Za-z]/g).forEach(word => console.log(word))//[Iterator] { "H", "e", "l", "l", "o", "W", "o", "r", "l", "d" }

//Searches for match and returns index
let str = "JavaScript is powerful"
console.log(str.search("Script"))  // ➜ 4 (starts at index 4)
console.log(str.search(/power/i)) // ➜ 15 (case-insensitive match)
console.log(str.search("Python"))  // ➜ -1 (not found)

//Compares two strings according to locale
console.log("apple".localeCompare("banana")); // ➜ -1 → str1 comes before str2
console.log("apple".localeCompare("apple"));  // ➜ 0 → strings are equal
console.log("banana".localeCompare("apple")); // ➜ 1 → str1 comes after str2

console.log('---------------String Inspection & Construction---------------')

//The valueOf() method is the default method for JavaScript strings.
// It is used internally by JavaScript.
// Normally, you will not use it in your code.
console.log(string.valueOf())//Hello World

//Converts object to string (often redundant)
console.log(string.toString())////Hello World

//Unicode normalization (`NFC`, `NFD`, `NFKC`, `NFKD`)
console.log(string.normalize('NFC'))//Hello World

//Returns full Unicode code point
console.log(string.codePointAt(1))//101

//Creates string from UTF-16 code units
console.log(String.fromCharCode(104, 101, 108, 108, 111))//hello

//Creates string from code points
console.log(String.fromCodePoint(104, 101, 108, 108, 111))//hello
