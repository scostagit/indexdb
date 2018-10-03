setTimeout(function () {  
    db.transaction(["UserName"],"readwrite").objectStore("UserName").delete('SBKL00'); //delete key
}, 10000);   

/*//If there is adding, there should be deleting :). You can delete an object from object store as follows:
crDB.onsuccess = function (event) {
    console.log("Awesome, You have successfully deleted SBKL00!");
    db = event.target.result;

    setTimeout(function () {
        db.transaction(["UserName"],"readwrite").objectStore("UserName").delete('SBKL00'); //delete key
    }, 10000);               
}*/


