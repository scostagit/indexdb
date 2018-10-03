var button = document.querySelector("#btnGet");
button.addEventListener("click",function(){  
    //If there is adding, there should be deleting :). You can delete an object from object store as follows:  
    var get = db.transaction(["UserName"],"readwrite").objectStore("UserName").get('SBKL01');

    //event if everythings goes well
    get.onsuccess = function (event) {
        alert("The name you have requested is : " + get.result.Name);
    };            
    
});



