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

//concat() - joins 2 or more arrays
console.log("------------concat()------------")
const arr6 = [1, 2, 3];
const arr7 = [4, 5, 6];
const arr8 = arr6.concat(arr7);
console.log(arr8);

//indexOf()
console.log("------------indexOf()------------")
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = arr9.indexOf(3);//2
console.log(index);
console.log(arr9.indexOf(11));//-1 - not found

//lastIndexOf()
console.log("------------lastIndexOf()------------")
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3];
console.log(arr10.lastIndexOf(3));//10
console.log(arr10.lastIndexOf(11));//-1 - not found

//find()
console.log("------------find()------------")
const index1 = arr10.find(item => item === 3);//2
console.log(index1);

//findIndex()
console.log("------------findIndex()------------")
const fruitsObj = [{name: 'apple'}, {name: 'banana'}, {name: 'orange'}, {name: 'kiwi'}]
const index2 = fruitsObj.findIndex(item => item.name === 'banana');//1
console.log(index2);

//map()
console.log("------------map()------------")
const arr11 = [1, 2, 3, 4];
arr11.map(item => item * 2).forEach(item => console.log(item));//[ 2, 4, 6, 8 ]

//sort()
console.log("------------sort()------------")
const notSorted = [1, 3, 2, 5, 4];
const sorted = notSorted.sort();
console.log(sorted);//[ 1, 2, 3, 4, 5 ]

//reverse()
console.log("------------reverse()------------")
console.log(sorted.reverse());//[ 5, 4, 3, 2, 1 ]

//filter()
console.log("------------filter()------------")
const arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = arr12.filter(item => item % 2 === 0);
console.log(even);//[ 2, 4, 6, 8, 10 ]


//reduce()
console.log("------------reduce()------------")
let sum = arr12.reduce((acc, item) => acc + item, 0);
console.log(sum);//55

//split()
console.log("------------split()------------")
const str = 'hello world';
const words = str.split(' ');
console.log(words);//[ 'hello', 'world' ]

//join()
console.log("------------join()------------")
const joined = words.join(' ');
console.log(joined);//hello world

//Spread Operator
console.log("------------spread operator------------")
const arr13 = [1, 2, 3, 4, 5];
const arr14 = [arr13, 6, 7, 8];//[ [ 1, 2, 3, 4, 5 ], 6, 7, 8 ]
const arr15 = [...arr13, 6, 7, 8];//[1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr14);
console.log(arr15);
console.log(Math.min(...arr15));//1

//Array Destructuring
const names = ["Vasia", "Pupkin", "MR", 30];
//const name = names[0];
//const surname = names[1];
const [name, surname, ...otherInfo] = names;
console.log(name, surname, otherInfo);//Vasia Pupkin [ 'MR', 30 ]
