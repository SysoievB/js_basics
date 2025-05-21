class Person {
    name = 'Max';

    constructor() {
        this.age = 30;

        // Function as a property (defined inside constructor, not on prototype)
        this.greet1 = function () {
            console.log(`Hello I am constructor greet1 function, name ${this.name}, age ${this.age}`);
        };
    }

    // Method defined on the prototype
    greet2() {
        console.log(`Hello I am ordinary greet2 method, name ${this.name}, age ${this.age}`);
    }

    // Function expression as a class field (added to instance, not prototype)
    greet3 = function () {
        console.log(`Hello I am greet3 function, name ${this.name}, age ${this.age}`);
    };

    // Arrow function as a class field (lexical this)
    greet4 = () => {
        console.log(`Hello I am arrow greet4 function, name ${this.name}, age ${this.age}`);
    };
}

const person = new Person();

person.greet1();//Hello I am constructor greet1 function, name Max, age 30
person.greet2();//Hello I am ordinary greet2 method, name Max, age 30
person.greet3();//Hello I am greet3 function, name Max, age 30
person.greet4();//Hello I am arrow greet4 function, name Max, age 30
