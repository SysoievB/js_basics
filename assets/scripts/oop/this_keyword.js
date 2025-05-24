const person = {
    fullName: {
        name: 'John',
        surname: 'Doe'
    },
    greet: function () {
        return 'Hello ' + this.fullName.name + ' ' + this.fullName.surname;
    }
}

console.log(person.greet());//Hello John Doe

const {greet} = person;
//console.log(greet());//error
console.log(greet.call(person));//Hello John Doe

//1) this in Global Context (i.e. outside of any function)

function something1() {
    return 'Hello';
}

console.log(this); //{} logs global object (window in browser) - ALWAYS (also in strict mode)!
// 2) this in a Function (non-Arrow) - Called in the global context

function something2() {
    console.log(this);
}

something2(); // logs global object (window in browser) in non-strict mode, undefined in strict mode
// 3) this in an Arrow-Function - Called in the global context

const something3 = () => {
    console.log(this);
}

something3(); //{} logs global object (window in browser) - ALWAYS (also in strict mode)!
// 4) this in a Method (non-Arrow) - Called on an object

const person3 = {
    name: 'Max',
    greet: function () { // or use method shorthand: greet() { ... }
        console.log(this.name);
    }
};

person3.greet(); //Max -- "this" refers to the person object
// 5) this in a Method (Arrow Function) - Called on an object

const person4 = {
    name: 'Max',
    greet: () => {
        console.log(this.name);
    }
};

person4.greet(); // logs nothing (or some global name on window object), "this" refers to global (window) object, even in strict mode
// this can refer to unexpected things if you call it on some other object, e.g.:

const person5 = {
    name: 'Max',
    greet() {
        console.log(this.name);
    }
};

const anotherPerson = {name: 'Manuel'}; // does NOT have a built-in greet method!

anotherPerson.sayHi = person5.greet; // greet is NOT called here, it's just assigned to a new property/ method on the "anotherPerson" object

anotherPerson.sayHi(); // logs 'Manuel' because method is called on "anotherPerson" object => "this" refers to the "thing" which called it