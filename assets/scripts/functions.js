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
addBtn.addEventListener('click', function () {
    console.log('clicked');
})