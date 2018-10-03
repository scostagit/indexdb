var button3 = document.querySelector("#btnShow");
button3.addEventListener("click",function(){ 
    var curObject = db.transaction(["UserName"],"readwrite").objectStore("UserName");
    var tableBody = document.querySelector("#show > tbody");
    tableBody.innerHTML ='';

    curObject.openCursor().onsuccess = function (event) { //Opening the cursor
        var cur = event.target.result;
        if (cur) {// Checks for the cursor           
            tableBody.innerHTML +='<tr><td>' +  cur.key + '</td><td>' + cur.value.Name + '</td></tr>';            
            cur.continue();
        } 
    };    
    
});

