const people = ['Vasia', 'Petia', 'Galia'];
const iterator = people[Symbol.iterator]();

console.log(iterator);//Object [Array Iterator] {}
console.log(iterator.next());//{ value: 'Vasia', done: false }
console.log(iterator.next());//{ value: 'Petia', done: false }
console.log(iterator.next());//{ value: 'Galia', done: false }
console.log(iterator.next());//{ value: undefined, done: true }

console.log('--------------while--------------');
while (!(item = iterator.next()).done) {
    console.log(item.next().value);
}