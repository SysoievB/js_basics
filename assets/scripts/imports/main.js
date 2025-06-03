//Importing named exports
import { PI, square as sq } from "./utils.js";
//Importing default export
import getUser from "./greet.js";

console.log(PI);//3.14
//renamed from square to sq
console.log(sq(3));//9
console.log(getUser("Vasia"));//Hello, Vasia
