// I have consulted the tutorial website https://www.w3schools.com/howto/howto_js_todolist.asp
//I have consulted chatgtp to better understand the usage of localStorage
const taskList = document.getElementById("taskList");
const textNewTask = document.getElementById("textNewTask");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function createTaskElement(text) {
  const listItem = document.createElement("li");
  const taskText = document.createTextNode(text);
  listItem.appendChild(taskText);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.className = "buttonX";
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    const taskIndex = tasks.findIndex(task => task.text === text);
    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    listItem.remove();
    if (tasks.length === 0) {
      localStorage.removeItem("tasks");
    }
  });

  listItem.addEventListener("click", function () {
    this.classList.toggle("completed");
    const taskIndex = tasks.findIndex(task => task.text === text);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  return listItem;
}

function addTask() {
  const textNewTaskValue = textNewTask.value.trim();
  if (textNewTaskValue === "") {
    alert("Empty");
    return;
  }

  const listItem = createTaskElement(textNewTaskValue);
  taskList.appendChild(listItem);
  tasks.push({ text: textNewTaskValue, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  textNewTask.value = "";
}

function loadTasks() {
  tasks.forEach(task => {
    const listItem = createTaskElement(task.text);
    taskList.appendChild(listItem);
    if (task.completed) {
      listItem.classList.add("completed");
    }
  });
}

window.addEventListener("DOMContentLoaded", loadTasks);

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});
