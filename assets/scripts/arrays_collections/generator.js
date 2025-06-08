//Генераторы представляют особый тип функции, которые используются для генерации значений
function* getNumber() {
    yield 5;
    yield 25;
    yield 125;
}

const generator = getNumber();
console.log(generator.next());//{ value: 5, done: false }
console.log(generator.next());// { value: 25, done: false }
console.log(generator.next());// { value: 125, done: false }
console.log(generator.next());// { value: undefined, done: true }

function* generateData(number) {
    try {
        yield number;
        yield number * 2;
        yield number * 4;
    } catch (error) {
        console.log("Error: ", error);
    }
}
const numberGenerator = generateData(2);
console.log(numberGenerator.next());//{ value: 2, done: false }
console.log(numberGenerator.next());//{ value: 4, done: false }
console.log(numberGenerator.throw(new Error("Custom Error")));//Error:  Error: Custom Error
console.log(numberGenerator.next());//{ value: undefined, done: true }
