
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list")



//Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click" , deleteCheck);



//functions

function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-items");
    todoDiv.appendChild(newTodo);

    

    //check mark button
    const completedbutton = document.createElement("button");
    completedbutton.innerHTML = "<i class='fas fa-check'></i>";
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    //change button
    const changebutton = document.createElement("button");
    changebutton.innerHTML = "<i class='fas fa-pencil'></i>";
    changebutton.classList.add("change-btn");
    todoDiv.appendChild(changebutton);
    
    // trash mark button
    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = "<i class='fas fa-trash'></i>";
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);
    //append to list
    todoList.appendChild(todoDiv);
    
    //clear todo input value
    todoInput.value = "";
}
function deleteCheck(event){
    const item = event.target;
    //delele
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        todo.addEventListener("transitionend" , function(){
            item.remove();
        })
        
    }

    //check market
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

    if(item.classList[0] === "change-btn"){
        const todo = item.parentElement;
        todo.classList.add("change");
        todo.addEventListener(updatelist, function(){
            item.remove();
        })

    }

}
