//EvalError: представляет ошибку, которая генерируется при выполнении глобальной функции eval()
//RangeError: ошибка генерируется, если параметр или переменная, представляют число, которое находится вне некотоого допустимого диапазона
//ReferenceError: ошибка генерируется при обращении к несуществующей ссылке
//SyntaxError: представляет ошибку синтаксиса
//TypeError: ошибка генерируется, если значение переменной или параметра представляют некорректный тип или пр попытке изменить значение, которое нельзя изменять
//URIError: ошибка генерируется при передаче функциям encodeURI() и decodeURI() некорректных значений
//AggregateError: предоставляет ошибку, которая объединяет несколько возникших ошибок


//try-catch-finally
try {
    console.log('before exception thrown');
    notExisitingFunc();
    console.log('never reached');
} catch (e) {
    console.log(`Thrown exception message: ${e.message}`);
    console.log(`Thrown exception name: ${e.name}`);
} finally {
    console.log('finally');
}

//throw
throwError(10);

function throwError(num) {
    console.log("throwError function");
    try {
        if (isNaN(num)) {
            throw new TypeError('a is not a number');
        }
        if (num > 5) {
            throw new RangeError('a is greater than 5');
        }
    } catch (e) {
        if (e instanceof TypeError) {
            console.log("Wrong type")
        } else if (e instanceof RangeError) {
            console.log("Wrong range")
        } else {
            console.log("Unknown error")
        }
    }
    return num;
}

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyCustomError';
    }
}

try {
    throw new MyCustomError('Something went wrong');
} catch (e) {
    console.log("Custom error name: ", e.name);
}