document.addEventListener("DOMContentLoaded", () => {

  let createTaskForm = document.querySelector("form")
  let createNewTask = document.querySelectorAll("form > input")[1]
  let taskList = document.getElementById("tasks")
  let taskInput = document.getElementById("new-task-description")


  function deleteTask(e){
    e.target.parentElement.remove()
    alert("Task Deleted!")
  }

  function addTask(e){
    e.preventDefault();
    let newTaskEl = document.createElement("li")
    newTaskEl.innerText = taskInput.value
    let deleteButton= document.createElement("button")
    deleteButton.innerText = "Delete Task"
    deleteButton.addEventListener("click", deleteTask)
    newTaskEl.append(deleteButton)
    taskList.append(newTaskEl)
    // taskList.innerHTML +=  `<li>${taskInput.value} ${deleteButton.outerHTML}</li>`;
    createTaskForm.reset();
}

  createTaskForm.addEventListener("submit", addTask);


});
