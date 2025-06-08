const people = ['Vasia', 'Petia', 'Galia'];
const iterator = people[Symbol.iterator]();

console.log(iterator);//Object [Array Iterator] {}
console.log(iterator.next());//{ value: 'Vasia', done: false }
console.log(iterator.next());//{ value: 'Petia', done: false }
console.log(iterator.next());//{ value: 'Galia', done: false }
console.log(iterator.next());//{ value: undefined, done: true }

console.log('--------------while--------------');
const whileIterator = people[Symbol.iterator](); // reset
let result = whileIterator.next();
while (!result.done) {
    console.log(result.value);
    result = whileIterator.next();
}
