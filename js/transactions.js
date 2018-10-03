/*
To create a transaction, we can use the following syntax. We can use transaction method from our database instance.
 */

//Array with names
var myNames = ["Sibi", "Aji", "Ansu", "Shantu", "Aghil"];

setTimeout(function () {
    //Creating transaction
    var myTran = db.transaction(["UserName"], "readwrite");
        
    //Create object store 
    var myObj = myTran.objectStore("UserName");

    //adding data
    for (var i = 0; i < 5; i++) {//Adding 5 objects
        myObj.add({ UserID: 'SBKL0' + i, Name: myNames[i] });
    }

    //event will be called if everthing goes well.
    myTran.oncomplete = function (e) {
        console.log("Awesome, Transaction is successfully created!");
    };  

    //event will be called if something wrong happened.
    myTran.onerror = function (e) {
        console.log("Oops, There is error!", e.message);
    }; 
}, 10000);  


   
/*
var myNames = ["Sibi", "Aji", "Ansu", "Shantu", "Aghil"];//Array with names

crDB.onsuccess = function (event) {
    console.log("Awesome, You have successfully Opened a Databse!");
    db = event.target.result;

    //Creating transaction
    var myTran = db.transaction(["UserName"], "readwrite");
    
    //Create object store 
    var myObj = myTran.objectStore("UserName");

    //adding data
    for (var i = 0; i < 5; i++) {//Adding 5 objects
        myObj.add({ UserID: 'SBKL0' + i, Name: myNames[i] });
    }

    //event will be called if everthing goes well.
    myTran.oncomplete = function (e) {
        console.log("Awesome, Transaction is successfully created!");
    };  

    //event will be called if something wrong happened.
    myTran.onerror = function (e) {
        console.log("Oops, There is error!", e.message);
    };                
}
*/