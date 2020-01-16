document.getElementById("todoField").value = "";

let todoForm = document.getElementById("todoForm");
let submitForm = document.getElementById("submitTodo");

todoForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    let newTodo = document.getElementById("todoField").value;
    if(newTodo!=""){
        let list = document.getElementById("todoList");
        let li = document.createElement("li");
        let element = document.createElement("div");

        document.getElementById("todoField").value = "";

        checkbox = document.createElement('input'); 
        checkbox.type = "checkbox";


        element.appendChild(checkbox);
        element.appendChild(document.createTextNode(newTodo));

        li.appendChild(element);
        li.classList.add("newElement");

        list.appendChild(li);
        
    }
});

let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", (event)=>{
    let checkboxes = document.getElementsByTagName("input");
    for(i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
});

let markAllButton = document.getElementById("markAllButton");
markAllButton.addEventListener("click", (event)=>{
    let checkboxes = document.getElementsByTagName("input");
    for(i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = true;
    }
});

let deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", (event)=>{
    let newElems = document.getElementsByClassName("newElement");
    let size = newElems.length;
    for(i=0; i<size; i++){
        newElems[0].parentNode.removeChild(newElems[0]);
    }
});