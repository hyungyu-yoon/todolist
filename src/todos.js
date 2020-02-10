
const  todosContainer = document.querySelector(".js-todos-container"),
  form = todosContainer.querySelector(".js-form-todos"),
  input = form.querySelector(".js-input-todos"),
  todos = todosContainer.querySelector(".js-todos-list");

let todosList = [];

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todosList));
}

function handleDelClick(event){
  const button = event.target;
  const li = button.parentNode;

  const id = li.id;

  const newToDos = todosList.filter(function(todo){
    return parseInt(todo.id) !== parseInt(id);
  });

  li.remove();
  todosList = newToDos;
  saveTodos();
}

function addTodos(todo) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const span = document.createElement("span");
  const id = todo.id;
  span.innerText = " " + todo.text;
  button.innerText = "❌";
  button.addEventListener("click", handleDelClick);

  li.id = id;
  li.appendChild(button);
  li.appendChild(span);

  todos.appendChild(li);
  todosList.push(todo);
  saveTodos();
}

function handleSubmit(event) {
  event.preventDefault();
  const text = input.value;
  input.value = "";
  const todo = {
    id: new Date().getTime(),
    text: text
  };
  addTodos(todo);
}

function init() {
  const loadData = JSON.parse(localStorage.getItem("todos"));

  loadData.forEach(element => {
    addTodos(element);
  });

  form.addEventListener("submit", handleSubmit);
}

init();
