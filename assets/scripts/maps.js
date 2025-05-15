//A Map is a built-in JavaScript object that stores key-value pairs, where:
// Keys can be of any type: strings, numbers, objects, even functions.
// Preserves the insertion order of keys.
// Allows for efficient lookup, deletion, and iteration.
const emptyMap = new Map();
const map = new Map([
    ['name', 'Alice'],
    ['age', 30]
]);
// Set key-value pairs
map.set('name', 'Alice');
map.set('age', 25);
map.set(true, 'active');  // boolean key
map.set({ x: 10 }, 'point');  // object key

// Get values
console.log(map.get('name'));     // 'Alice'
console.log(map.get(true));       // 'active'

// Check if key exists
console.log(map.has('age'));      // true

// Size
console.log(map.size);            // 4

// Delete
map.delete('age');
console.log(map.has('age'));      // false

// Iterate
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
//name: Alice
// true: active
// [object Object]: point
for (const [key, value] of map.entries()) {
    console.log(`${key}: ${value}`);
}

const keys = [...map.keys()];
const values = [...map.values()];
const entries = [...map.entries()];
console.log(keys);//[ 'name', true, { x: 10 } ]
console.log(values);//[ 'Alice', 'active', 'point' ]
console.log(entries);//[ [ 'name', 'Alice' ], [ true, 'active' ], [ { x: 10 }, 'point' ] ]

//Converting Map → Object
const map1 = new Map([['a', 1], ['b', 2]]);
const obj = Object.fromEntries(map1);
console.log(obj); // { a: 1, b: 2 }
//Object → Map
const map2 = new Map(Object.entries(obj));
console.log(map2);//Map(2) { 'a' => 1, 'b' => 2 }

//Map → Array
const arr = [...map1]; // [['a', 1], ['b', 2]]
console.log(arr);//[ [ 'a', 1 ], [ 'b', 2 ] ]

//WeakMap
//Only accepts object keys
// Not iterable
// Used for private data storage in objects
// Allows garbage collection of unused keys
const wm = new WeakMap();
const obj1 = {};
wm.set(obj1, 'some value');
console.log(wm.get(obj1)); // 'some value'
