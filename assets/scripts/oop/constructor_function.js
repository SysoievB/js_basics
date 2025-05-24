class Person {
    constructor() {
        this.name = "Vasia";
        this.age = 30;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

//the same as
function Person1() {
    this.name = "Vasia";
    this.age = 30;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person();
const person1 = new Person1();
person.greet();//Hello, my name is Vasia
person1.greet();//Hello, my name is Vasia
