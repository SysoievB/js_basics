//storing functions in variables
const greeting = function greet() {
    console.log('Hello');
}

greeting();//Hello

const person = {
    name: 'John',
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}
person.greet();

//function declaration/statement
function add(a, b) {
    return a + b;
}

//function expression
const add2 = function (a, b) {
    return a + b;
}

//Anonymous functions
/*addBtn.addEventListener('click', function () {
    console.log('clicked');
})*/

//Arrow function
const log = message => {
    console.log(message);
};
log('Hello from arrow function');

const greet = () => {
    console.log('Hi there!');
};
greet();

const add1 = (a, b) => a + b;
console.log(add1(1, 2));

const loadPerson = pName => ({name: pName });
console.log(loadPerson('John'));

//Default arguments in functions
function greet1(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

greet1();         //Hello, Guest!
greet1('Alice');  //Hello, Alice!

//Rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100

//Functions inside functions
function outer(name) {
    function inner() {
        console.log(`Hello, ${name}`);
    }
    inner(); //Call inner function
}

outer('Alice'); //Hello, Alice

//callback function is: A function that is passed as an argument to another function,
//and is then invoked later, either synchronously or asynchronously.
function fetchData(callback) {
    // Simulate a delay (asynchronous operation)
    setTimeout(() => {
        console.log('Data fetched');
        callback();  // <- Call the provided function
    }, 1000);
}

function onDone() {
    console.log('Callback called!');
}

fetchData(onDone);

const sayHello = (name = '') => {
    console.log('Hi ' + name);
};

sayHello('Vasia');//Hi Vasia

sayHello();//Hi

//Add a new function: "checkInput" which takes an unlimited number of arguments(strings)
//and executes a callback function if NO argument/string is an empty string
function checkInput(cb, ...strings) {
    let hasEmptyText = false;
    for (const text of strings) {
        if (!text) {
            hasEmptyText = true;
            break;
        }
    }
    if (!hasEmptyText) {
        cb();
    }
}

checkInput(
    () => {
        console.log('All not empty!');
    },
    'Hello',
    '12',
    'adsfa',
    'Not empty'
);