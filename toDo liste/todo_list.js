//selecteurs
const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-list");

//écouteurs

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//écouteurs
function addTodo(event) {
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Créer le "li"
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //bouton check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"</i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //bouton supprimer
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"</i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //ajouter le todo à la todo liste
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e) {
    //delete todo
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
        /*item.parentElement.remove();*/
    }

    //check mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}