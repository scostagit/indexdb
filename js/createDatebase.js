window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
//check whether the database is created or not.
if (!window.indexedDB) {
    alert("Oops, Does not support IndexedDB");
}else{
     //Create database
     var dbName = 'myDB';// Database name
     var dbVersion = 1;// Database version            
     var crDB = window.indexedDB.open(dbName, dbVersion);   

     //EVENTS
     //onupgradeneeded:This event gets fired when you try upgrading your database. Here, we are creating an object store with name
     // ‘UserName’ and index key ‘UserID’. Below is the output you get when the onupgradeneeded is fired.
     crDB.onupgradeneeded = function (event) {
            console.log("That's cool, we are upgrading");
            var db = event.target.result;
            var objectStore = db.createObjectStore("UserName", { keyPath: "UserID" });
     };

     //onsuccess:
     crDB.onsuccess = function (event) {           
        console.log("Awesome, You have successfully Opened a Databse!");
        db = event.target.result;
    };

    //onerror:
    crDB.onerror = function (event) {
        console.log("Oops, There is error!");
        db = event.target.result;
    };
}