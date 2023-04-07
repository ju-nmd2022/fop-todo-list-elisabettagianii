// I have consulted the tutorial website https://www.w3schools.com/howto/howto_js_todolist.asp


function newElement() {
  // I create a list where to put the new task that i'll write in the input field 
  let itemOfTheList = document.createElement("li");
  let textNewTask = document.getElementById("textNewTask").value;
  let taskText = document.createTextNode(textNewTask);
  itemOfTheList.appendChild(taskText);
  if (textNewTask === "") {
    alert("Empty");
  } else {
    // if it's not empty i add it to the list, and then i set back the value of the input text to be empty again
    document.getElementById("taskList").appendChild(itemOfTheList);
  }
  document.getElementById("textNewTask").value = "";

  // i create a X button to add to all new added task, so I can delete them
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.idName = "buttonX";
  itemOfTheList.appendChild(deleteButton);

  // when clicked, the X button removes the task to do.
  deleteButton.addEventListener("click", function () {
    itemOfTheList.remove();
  });
}



