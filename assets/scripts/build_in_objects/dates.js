const currentDate = new Date();
console.log(currentDate);//2025-05-24T04:56:15.352Z

//В конструктор Date передается количества миллисекунд, которые прошли с начала эпохи Unix, то есть с 1 января 1970 года 00:00:00 GMT
const myDate = new Date(1359270000000);
console.log(myDate)//2013-01-27T07:00:00.000Z

//В конструктор Date передаются день, месяц и год:
const date1 = new Date("27 March 2008");
console.log(date1);//2008-03-26T23:00:00.000Z

const date2 = new Date("3/27/2008");
console.log(date2);//2008-03-26T23:00:00.000Z

const date3 = new Date("3 27 2008");
console.log(date3);//2008-03-26T23:00:00.000Z

//get methods
const today = new Date();
console.log(today.getDate());//24
console.log(today.getDay());//6
console.log(today.getMonth());//4
console.log(today.getFullYear());//2025

//set methods
const myDate1 = new Date();
myDate1.setDate(14);
myDate1.setMonth(10);
myDate1.setFullYear(2023);
console.log(myDate1);//2023-11-14T06:01:08.939Z
