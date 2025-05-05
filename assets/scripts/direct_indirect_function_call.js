//Direct Function Call
function double(num) {
    return num * 2;
}

double();//direct function call

//Indirect Function Call
function result(num, fun) {
    return `Result: `.concat(fun(num));
}

console.log(result(4, double));//indirect function call