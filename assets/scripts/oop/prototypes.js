function Person() {
    this.name = "Vasia";
    this.age = 30;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person();
const anotherPerson = new person.__proto__.constructor();
person.greet();//Hello, my name is Vasia
anotherPerson.greet();//Hello, my name is Vasia
console.dir(person);//Person { name: 'Vasia', age: 30, greet: [Function (anonymous)] }
console.dir(anotherPerson);//Person { name: 'Vasia', age: 30, greet: [Function (anonymous)] }

console.log(person.__proto__ === Person.prototype);//true
console.log(person.__proto__);//{}
console.log(Object.getPrototypeOf(person));//{}


Person.prototype.printAge = function() {
        console.log(this.age);
}
person.printAge();//30

function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal('Rex');
dog.speak(); // Rex makes a noise.

Object.setPrototypeOf(dog, Animal.prototype);
dog.speak();


