//A Set is a built-in JavaScript object that stores unique values of any type — primitive or object.
//Only unique values
// Order is insertion-based

//creation
const emptySet = new Set();
const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Set(4) { 1, 2, 3, 4 } — duplicates removed
mySet.add(5);
mySet.add(5); // duplicate — ignored
console.log(mySet);//Set(5) { 1, 2, 3, 4, 5 }
mySet.add('hello');
mySet.add({ name: 'Alice' });
console.log(mySet);//Set(7) { 1, 2, 3, 4, 5, 'hello', { name: 'Alice' } }
console.log(mySet.has(2));         // true
console.log(mySet.has('world'));   // false

// Delete
mySet.delete(1);
console.log(mySet.has(1));         // false

// Clear
mySet.clear();
console.log(mySet.size);           // 0

//Converting Between Set & Array
const set = new Set([1, 2, 3]);
const arr = Array.from(set); // or [...set]

const arr2 = [1, 2, 2, 3];
const unique = [...new Set(arr2)]; // [1, 2, 3]

//WeakSet
//Only stores objects
// Not iterable
// Used for tracking objects without preventing garbage collection
const ws = new WeakSet();
let obj = { a: 1 };
ws.add(obj);
console.log(ws);//WeakSet { <items unknown> }
console.log(ws.has(obj)); // true

