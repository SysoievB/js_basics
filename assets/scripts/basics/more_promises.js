//Promise.all, Promise.allSettled, Promise.any и Promise.race

// Promise.all() возвращает единый объект Promise, который объединяет набор промисов.
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Hello");
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "World");
});
Promise.all([promise1, promise2])
    .then(values => {
        const [promise1data, promise2data] = values;
        console.log(promise1data, promise2data);    // Hello World
    });//Hello World

//Promise.allSettled() также как и Promise.all() принимает набор промисов и выполняет их как единое целое, но возвращает объект со статусом и результатом промиса
const promise11 = new Promise((resolve,reject) => {
    reject("Непредвиденная ошибка");
    setTimeout(resolve, 500, "Hello");
});
const promise12 = new Promise((resolve,reject) => {
    setTimeout(resolve, 1000, "World");
});

Promise.allSettled([promise11, promise12])
    .then(values => {
        const [promise1data, promise2data] = values;
        console.log(promise1data);  // {status: "rejected", reason: "Непредвиденная ошибка"}
        console.log(promise2data);  // {status: "fulfilled", value: "World"}
    });

// Promise.race() также принимает несколько промисов, только возвращает первый завершенный промис (вне зависимости завершился от успешно или с ошибкой)
const promise21 = new Promise((resolve) => {
    setTimeout(resolve, 500, "Hello");
});
const promise22 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "World");
});
Promise.race([promise21, promise22])
    .then(value => console.log(value))       // Hello
    .catch(error => console.log(error));

//Promise.any() принимает несколько промисов и возвращает первый успешно завершившийся промис
const promise31 = new Promise((resolve, reject) => {
    reject("error in promise1");
    setTimeout(resolve, 500, "Hello");
});
const promise32 = new Promise((resolve) => {
    setTimeout(resolve, 1000, "World");
});
Promise.any([promise1, promise2])
    .then(value => console.log(value))       // World
    .catch(error => console.log(error));

//async & await
/*
async function название_функции(){

    await асинхронная_операция();
}*/
function sum(x, y){
    return new Promise(function(resolve){
        const result = x + y;
        resolve(result);
    });
}
// сокращенный вариант
// function sum(x, y){ return Promise.resolve(x + y);}

async function calculate(){
    const value = await sum(5, 3);
    console.log("Результат асинхронной операции:", value);
}
calculate();    // Результат асинхронной операции: 8