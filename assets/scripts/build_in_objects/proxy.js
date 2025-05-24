//Прокси (Proxy) представляет объект, который позволяет перехватывать выполнение операций по
//отношению к некоторому другому объекту и может переопределять его поведение
const target = {name: "Vasia"}
const handler1 = {};
const proxy = new Proxy(target, handler1);
console.log(proxy.name);//Vasia

const person = {
    name: 'Alice',
    age: 25
};

const handler = {
    get(target, prop) {
        console.log(`Accessing property: ${prop}`);
        return prop in target ? target[prop] : 'Not Found';
    },
    set(target, prop, value) {
        if (prop === 'age' && typeof value !== 'number') {
            throw new Error('Age must be a number');
        }
        target[prop] = value;
        return true;
    }
};

const proxyPerson = new Proxy(person, handler);

console.log(proxyPerson.name); // Logs: Accessing property: name -> 'Alice'
console.log(proxyPerson.gender); // Logs: Accessing property: gender -> 'Not Found'

proxyPerson.age = 30; // OK
//proxyPerson.age = 'thirty'; // Throws error
