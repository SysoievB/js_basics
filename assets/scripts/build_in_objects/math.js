//Объект Math. Математические операции
console.log('abs() возвращает абсолютное значение числа')
console.log(Math.abs(-25)); // 25
console.log(Math.abs(34)); // 34

console.log('min() и max()')
console.log(Math.min(13, 453, 4))//4
console.log(Math.max(13, 453, 4))//453

console.log('ceil() округляет число до следующего наибольшего целого числа')
console.log(Math.ceil(9.1))//10
console.log(Math.ceil(9.1))//10

console.log('floor() округляет число до следующего наименьшего целого числа')
console.log(Math.floor(9.1))//9
console.log(Math.floor(9.9))//9

//round() округляет число до следующего наименьшего целого числа, если его десятичная часть меньше 0.5.
//Если же десятичная часть равна или больше 0.5, то округление идет до ближайшего наибольшего целого числа
console.log('round()')
console.log(Math.round(9.1))//9
console.log(Math.round(9.9))//10
console.log(Math.round(9.5))//10

console.log('random() возвращает случайное число с плавающей точкой их диапазона от 0 до 1')
console.log(Math.random())//0.004412873364454173

console.log('pow() возвращает число в определенной степени. Например, возведем число 2 в степень 3')
console.log(Math.pow(2, 3))//8

console.log('sqrt() возвращает квадратный корень числа')
console.log(Math.sqrt(16))//4

console.log('log() возвращает натуральный логарифм числа')
console.log(Math.log(100))//4.605170185988092
