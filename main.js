

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  // I create a list where to store the new task that i'll write
  let newTask = document.getElementById("textNewTask").value;
  // i create a new text node in the DOM
  let t = document.createTextNode(newTask);
  // I let the list be a child of the parent element "t"
  li.appendChild(t);
  if (newTask === "") {
    alert("Empty");
  } else {
    // if it's not empty i add it to the list, and then i set back the value of the input text to be empty again
    document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("textNewTask").value = "";
}
