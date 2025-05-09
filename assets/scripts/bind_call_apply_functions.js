//call(thisArg, arg1, arg2, ...) - Calls a function with a given this value and arguments provided individually
function greet(greeting, name, age) {
    console.log(`${greeting}, ${this.name}, ${this.age}`)//without this -> undefined
}
const person = { name: 'Alice', age: 25 };
greet.call(person, 'Hi', person)

//apply(thisArg, [argsArray]) - Like call(), but arguments are passed as an array
greet.apply(person, ['Hello', person])

//bind(thisArg, arg1, arg2, ...) - Returns a new function with bound this (does NOT execute immediately)
const greetAlice = greet.bind(person, 'Hey');
greetAlice('?'); // Hey, Alice?
