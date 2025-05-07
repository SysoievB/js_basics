//for loop
for (let i = 1; i < 5; i++) {
    console.log(i)//1 2 3 4
}

//for-of loop
const arr = [1, 2, 3, 4];
for (const el of arr) {
    console.log(el)//1 2 3 4
}

//for-in loop
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key)
    console.log(obj[key])
}//a 1 b 2 c 3

//while loop
let i = 1;
while (i < 5) {
    console.log(i)
    i++;
}//1 2 3 4

//do-while loop
let y = 5
do {
    console.log(y)
    y--;
} while (y > 0)//5 4 3 2 1

//break
console.log('break')
for (let i = 1; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i)
}

//continue
console.log('continue')
for (let i = 1; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i)
}

//label statement
console.log('label statement')
outer: for (let i = 1; i < 5; i++) {
    inner: for (let j = 1; j < 5; j++) {
        console.log(i, j)
        if (i === 3 && j === 3) {
            break outer;
        }
    }
}