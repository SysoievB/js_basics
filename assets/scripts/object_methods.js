console.log(`---------------------Creating & Cloning Objects---------------------`)
/*
Creates a new object with a given prototype
* When you use Object.create(person), it creates a new object (person2) that inherits from
* person — meaning its own properties are empty, but it accesses inherited properties
* through the prototype chain.*/
let person = {
    name: 'John',
    age: 30,
    job: 'Software Engineer'
}

let person2 = Object.create(person);
console.log(person2.age)//30
console.log(person2['name']);//John
console.log(person2[2]);//undefined

/*
Object.assign(target, ...src) - Copies properties from sources to target
Copies enumerable own properties from one or more source objects (...sources) to a target object (target)
Shallow copy: Nested objects/arrays are referenced (not cloned)
Overwrites existing properties in target if keys collide.
Returns the modified target object.*/
const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { d: 6 };

const merged = Object.assign(target, source1, source2);

console.log(merged); // { a: 1, b: 4, c: 5, d: 6 }
console.log(target); // ^ Same (target is modified!)

//structuredClone(obj) - Deep clone of most objects
const original = {
    name: "Alice",
    hobbies: ["coding", "chess"],
    address: { city: "Berlin" }
};

const clone = structuredClone(original);

// Modify the clone:
clone.hobbies.push("music");
clone.address.city = "Paris";

console.log(original.hobbies); // ["coding", "chess"] (unchanged)
console.log(original.address.city); // "Berlin" (unchanged)
console.log(clone.hobbies);// [ 'coding', 'chess', 'music' ]
console.log(clone.address.city);// Paris

console.log(`---------------------Checking & Comparing---------------------`)

//=== vs is()
console.log('===');
console.log(1 === 1);             // true
console.log("1" === 1);           // false (different types)
console.log(true === 1);          // false
console.log(null === undefined);  // false
console.log(NaN === NaN);         // false
console.log(0 === -0);            // true
console.log('hi' === 'hi');       // true

console.log('is()');
console.log(Object.is(NaN, NaN));     // true  ← unlike ===
console.log(Object.is(0, -0));        // false
console.log(Object.is(1, 1));         // true
console.log(Object.is("hi", "hi"));   // true

//Checks if property exists on an object itself
console.log(person.hasOwnProperty('name')) //true
console.log(person.hasOwnProperty('surname')) //false

// Checks if property exists (own or inherited)
console.log('name' in person) //true
console.log('surname' in person) //false

console.log(`--------------------- Getting Keys, Values, Entries---------------------`)
//Array of own enumerable property keys
Object.keys(person).forEach(key => console.log(key)); //name age job

//Array of own enumerable values
Object.values(person).forEach(value => console.log(value)); //John 30 Software Engineer

//Array of `[key, value]` pairs
Object.entries(person).forEach(entry => console.log(entry))
//[ 'name', 'John' ]
// [ 'age', 30 ]
// [ 'job', 'Software Engineer' ]

//Converts array of `[key, value]` to object
const entries = Object.entries(person);
console.log(Object.fromEntries(entries));//{ name: 'John', age: 30, job: 'Software Engineer' }

console.log(`---------------------Preventing Modifications---------------------`)
//Object.freeze(obj) - Makes object immutable
//Object.isFrozen(obj) - Check if object is frozen
const user = { name: 'Alice' };
Object.freeze(user);

user.name = 'Bob';         //  no effect
user.age = 25;             //  cannot add
delete user.name;          //  cannot delete

console.log(user);         // { name: 'Alice' }
console.log(Object.isFrozen(user)); // true

//Object.seal(obj) - Prevents adding/removing (but allows edits)
//Object.isSealed(obj) - Check if object is sealed
const car = { brand: 'Toyota' };
Object.seal(car);

car.brand = 'Honda';       //  allowed
car.model = 'Corolla';     //  cannot add
delete car.brand;          //  cannot delete

console.log(car);          // { brand: 'Honda' }
console.log(Object.isSealed(car));//true

//Object.preventExtensions(obj) - Prevents adding new properties
//Object.isExtensible(obj) - Check if extensible
const book = { title: '1984' };
Object.preventExtensions(book);

book.title = 'Animal Farm';  // allowed
delete book.title;           // allowed
book.author = 'Orwell';      // can't add

console.log(book);           // {}
console.log(Object.isExtensible(book));//true

console.log(`---------------------Prototypes & Inheritance---------------------`)
//Object.getOwnPropertyDescriptor(obj, key) - Gets metadata of a property
const user2 = { name: 'Alice' };
console.log(Object.getOwnPropertyDescriptor(user2, 'name'));
/*
{
  value: 'Alice',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

//Object.defineProperty(obj, key, descriptor) - Defines custom property
const user1 = {};
Object.defineProperty(user1, 'id', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(user1.id);           // 123
user1.id = 456;                  // won't change due to writable: false
console.log(user1);              // { id: 123 }

//Object.defineProperties(obj, props) - Define multiple properties
const product = {};
Object.defineProperties(product, {
    name: {
        value: 'Laptop',
        writable: true
    },
    price: {
        value: 1000,
        writable: false
    }
});
console.log(product.name); // 'Laptop'
console.log(product.price); // 1000

//Object.getOwnPropertyDescriptors(obj) - All descriptors of the object
const item = { brand: 'Apple', year: 2023 };
console.log(Object.getOwnPropertyDescriptors(item));

/*
{
  brand: {
    value: 'Apple',
    writable: true,
    enumerable: true,
    configurable: true
  },
  year: {
    value: 2023,
    writable: true,
    enumerable: true,
    configurable: true
  }
}
*/

console.log(`---------------------Property Descriptors---------------------`)
//Object.hasOwn(obj, key) - Checks if `key` its own property (safer than `hasOwnProperty`)
const car1 = { model: 'Tesla' };
console.log(Object.hasOwn(car1, 'model')); // true
console.log(Object.hasOwn(car1, 'toString')); // false (inherited)

//Object.prototype.toString.call(val) - Returns the internal [[Class]] tag (great for accurate type checking)
console.log(Object.prototype.toString.call([]));        // [object Array]
console.log(Object.prototype.toString.call(null));      // [object Null]
console.log(Object.prototype.toString.call(() => {}));  // [object Function]

//Object.prototype.hasOwnProperty.call(obj, key) - Safe way to use hasOwnProperty, especially when obj might not inherit from Object.prototype
const obj = Object.create(null); // no prototype
obj.key = 'value';

console.log(Object.prototype.hasOwnProperty.call(obj, 'key')); //  true
