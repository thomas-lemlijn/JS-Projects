var input = document.getElementById("todo-input");
var todoList = document.getElementById("todo-list");
var btnReset = document.getElementById("reset");

addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    if (input.value === "") {
        return;
    }   
    var li = document.createElement("li");
    li.textContent = input.value;
    li.setAttribute("id", input.value);
    li.addEventListener("click", function() {
        li.remove();
    });
    todoList.appendChild(li);
    input.value = "";
}

btnReset.addEventListener("click", function() {
    todoList.innerHTML = "";
    input.value = "";
});