//Pure function - given the same input, always returns the same output.
function add(a, b) {
    return a + b;
}

//Is the following function a pure function?
let defaultValue = 10;
function addNumber(num) {
    return num + defaultValue;
}//defaultValue is an external variable and hence the function is not guaranteed to always yield the same result.

//Impure function - depends on or modifies external state.
let counter = 0;
function increment() {
    counter++;
}

//Factory Function - returns a new object each time when it's called
function createMe(age, name) {
    return {
        name,
        age
    }
}
console.log(createMe(25, 'Vasia'));

//Closure - A function that "remembers" the variables from its outer scope, even after the outer function has finished
function outer() {
    let count = 0;
    return function inner() {//inner() remembers count even after outer() is done. That’s closure.
        count++;
        console.log(count);
    };
}

const counter1 = outer();
counter1(); // 1
counter1(); // 2

//Pattern IIFE - Immediately Invoked Function Expression(in older scripts)
(function() {
    var age = 30;
    console.log(age); // 30
})()
//console.log(age); // Error: "age is not defined"
//the same as now
{
    const age = 30;
    console.log(age); // 30
}
//console.log(age); // Error: "age is not defined"

//Recursion
function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));//120

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumberBetween(1, 10));

//Promise
//A promise can be in one of three states:
// State	     Meaning
// pending	     The operation is still going on (not completed yet)
// fulfilled	 The operation completed successfully (you get a result)
// rejected	     The operation failed (you get an error)
const myPromise = new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
        if (success) {
            resolve("Data loaded successfully!");
        } else {
            reject("Failed to load data.");
        }
    }, 2000); // simulate delay
});

myPromise
    .then(result => {
        console.log("Success:", result); // if resolved
    })
    .catch(error => {
        console.log("Error:", error);    // if rejected
    });
