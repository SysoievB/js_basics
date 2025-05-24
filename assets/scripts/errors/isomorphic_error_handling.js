//Isomorphic error handling - Изоморфная обработка ошибок (браузер + Node.js)
function handleError(error) {
    if (typeof window === 'undefined') {
        // Node.js
        console.log('Ошибка на сервере:', error.message);
    } else {
        // Браузер
        alert('Ошибка в браузере: ' + error.message);
        console.log('Ошибка в браузере:', error.message);
    }
}

function runSomething() {
    try {
        // Генерация ошибки
        throw new Error('Что-то пошло не так!');
    } catch (err) {
        handleError(err);
    }
}

runSomething();//Ошибка на сервере: Что-то пошло не так!
