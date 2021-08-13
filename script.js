let input=document.querySelector("#inp");
let ul=document.querySelector("#list");

input.addEventListener("keypress", function(e){ 
    if(e.code=="Enter"){
        let task=e.currentTarget.value; // e.currentTarget refers to the current element in which the event listener is added.
        task=task.trim(); // To trim spaces from the front and back of the string.(If there is a string with only spaces, so no another li will be created.)
        if(task=="") return; // If the string is empty, it will return directly.(Will not create a li).
        let li=document.createElement("li"); // To create a new element in DOM.
        li.innerText=task; 

        li.addEventListener("dblclick", function(e){
            e.currentTarget.remove(); //Will remove the current element. 
        });
        ul.append(li); // Add li to the ul tag.
        e.currentTarget.value="";
    }
})