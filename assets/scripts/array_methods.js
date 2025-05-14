//array creation
const arr = [1, 2, 3];
console.log(arr)//[1, 2, 3]
const arr2 = new Array('hey', 'hello');
console.log(arr2);//[ 'hey', 'hello' ]

const arr3 = Array(5);//empty array with size 5
const arr4 = Array.from("hi!");//transforms string to array
console.log(arr4);//[ 'h', 'i', '!' ]

const arr5 = [1, "hello", {name: 'vasia'}];//can contain diff types of elements
console.log(arr5);//[ 1, 'hello', { name: 'vasia' } ]

//adding elements
const hobbies = ['swimming', 'running'];
hobbies.push('cycling');//always add in the end of an array
hobbies.unshift('coding');//always add in the begging of an array
console.log(hobbies);//[ 'coding', 'swimming', 'running', 'cycling' ]

//removing elements
hobbies.pop();//removing the last element
console.log(hobbies);//[ 'coding', 'swimming', 'running' ]
hobbies.shift();//removing the first element
console.log(hobbies);//[ 'swimming', 'running' ]

//splice() - is used to add, remove, or replace elements in an array. It modifies the original array and returns the removed elements.
//array.splice(start, deleteCount, item1, item2, ..., itemN)
console.log("------------splice()------------")
const fruits = ['apple', 'banana', 'orange', 'kiwi'];
const removed = fruits.splice(1, 2); // removes 2 items starting at index 1
console.log(fruits); // ['apple', 'kiwi']
console.log(removed); // ['banana', 'orange']
fruits.splice(1, 0, 'mango', 'peach'); // at index 1, remove 0 items, insert 2 items
console.log(fruits);//[ 'apple', 'mango', 'peach', 'kiwi' ]

const numbers = [1, 2, 3, 4];
numbers.splice(1, 2, 99, 100); // remove 2 items at index 1, add 99 and 100
console.log(numbers); // [1, 99, 100, 4]

//slice() - is used to create a shallow copy of part of an array (or string) without modifying the original
//array.slice(start, end)
console.log("------------slice()------------")
const fruits1 = ['apple', 'banana', 'orange', 'kiwi'];
const result = fruits1.slice(1, 3);
console.log(result);//['banana', 'orange']
console.log(fruits1);//['apple', 'banana', 'orange', 'kiwi']

const result1 = fruits1.slice(2);
console.log(result1);//[ 'orange', 'kiwi' ]

const letters = ['a', 'b', 'c', 'd'];
const lastTwo = letters.slice(-2);
console.log(lastTwo);// ['c', 'd']


