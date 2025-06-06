const storeBtn = document.getElementById('store-btn');
const retrieveBtn = document.getElementById('retrieve-btn');
const userId = 'uid123';

localStorage.setItem("uid", 'userId');

storeBtn.addEventListener('click', () => {
    localStorage.setItem('uid', userId);
    document.cookie = `uid=${userId}`;
})
retrieveBtn.addEventListener('click', () => {
    const extracted = localStorage.getItem('uid');
    console.log('My Cookie: ' + document.cookie)
    if (extracted) {
        console.log(extracted);
    } else {
        console.log('Not found');
    }
});

//indexDB
const request = indexedDB.open("MyDatabase", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore("users", { keyPath: "id" });
};

request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction("users", "readwrite");
    const store = transaction.objectStore("users");
    store.add({ id: 1, name: "Alice" });
};
