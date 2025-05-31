//A promise can be in one of three states:
// State	     Meaning
//PENDING => Promise is doing work, neither then() nor catch() executes at this moment
//RESOLVED => Promise is resolved => then() executes
//REJECTED => Promise was rejected => catch() executes

//new Promise(executor)
const promise = new Promise(() => console.log('Hello'));

const promise1 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Data loaded successfully!");
    } else {
        reject("Failed to load data.");
    }
});

promise1.then(result => {
    console.log("Result:", result);
})

function add(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Division by zero!");
        }
        resolve(a + b);
    })
        .then(result => {
            console.log("Result:", result);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

add(1, 2);//Result: 3
add(10, 0);//Error: Division by zero!

/*
somePromiseCreatingCode()
    .then(firstResult => {
        return 'done with first promise';
    })
    .catch(err => {
        // would handle any errors thrown before
        // implicitly returns a new promise - just like then()
    })
    .finally(() => {
        // the promise is settled now - finally() will NOT return a new promise!
        // you can do final cleanup work here
    });
*/

//Обработка ошибки с помощью функции then
//promise
//   .then(function(value){
//     // получение значения
//   },
//   function(error){
//     // обработка ошибки
//   });

const helloPromise = new Promise(function(resolve){
    resolve("Hello");
})

const worldPromise = helloPromise.then(function(value){
    // возвращаем новое значение
    return value + " World";
});
const metanitPromise = worldPromise.then(function(value){
    // возвращаем новое значение
    return value + " from there";
});
metanitPromise.then(function(finalValue){
    // получаем финальное значение
    console.log(finalValue);    // Hello World from there
});
//the same
new Promise(resolve => resolve("Hello"))
    .then(value => value + " World")
    .then(value => value + " from there")
    .then(finalValue => console.log(finalValue));

//Метод finally
function generateNumber(str){
    return new Promise((resolve, reject) => {
        const parsed = parseInt(str);
        if (isNaN(parsed)) reject("Not a number");
        else resolve(parsed);
    });
};
function printNumber(str){
    generateNumber(str)
        .then(value => console.log(value))
        .catch(error => console.log(error))
        .finally(() => console.log("End"));
}

printNumber("3");
printNumber("triuy");