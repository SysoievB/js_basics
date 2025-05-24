//Symbol представляет некоторое уникальное значение
const tom = Symbol("Tom");
console.log(tom);//Symbol(Tom)

const tomas = Symbol("Tom");
console.log(tomas); // Symbol(Tom)

console.log(tom == tomas);//false
console.log(tom === tomas);//false

const company = {
    [Symbol("Tom")]: "senior",
    [Symbol("Sam")]: "junior",
    [Symbol("Tom")]: "junior"
}

const developers = Object.getOwnPropertySymbols(company);
for (dev of developers) {
    console.log(`${dev.toString()} - ${company[dev]}`);
}//Symbol(Tom) - senior Symbol(Sam) - junior Symbol(Tom) - junior


const company1 = {
    "Tom": "senior",
    "Sam": "junior",
    "Tom": "junior"
}
for(developer in company1) {
    console.log(`${developer} - ${company1[developer]}`);
}//Tom - junior Sam - junior
