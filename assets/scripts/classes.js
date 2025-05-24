class Person {
    static #retirementAge = 65;

    #name;//private field
    age;

    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    static isRetired(age) {
        return age >= this.#retirementAge;
    }

    print() {
        console.log(`Name: ${this.#name}  Age: ${this.age}`);
    }
}

const tom = new Person("Tom", 37);
//tom.#name = "Sam";   // ! Ошибка - нельзя обратиться к приватному полю
tom.age = -45;
tom.setName("Vasia");
tom.print();    // Name: Vasia  Age: 37
console.log(tom.getName());//Vasia
console.log(Person.isRetired(tom.age));//false