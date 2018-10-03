var button2 = document.querySelector("#btnUpdate");

button2.addEventListener("click",function(){     
    var updObject = db.transaction(["UserName"],"readwrite").objectStore("UserName");
    //get the user by key
    var upd= updObject.get('SBKL03');

    upd.onsuccess = function (event) {        
        upd.result.Name = 'New Name';
        updObject.put(upd.result);
    };    
    
});
