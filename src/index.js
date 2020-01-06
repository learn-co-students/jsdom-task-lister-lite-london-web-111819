document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let createTaskForm = document.querySelector('#create-task-form')

  let newTaskUl = document.querySelector('#tasks')

  createTaskForm.addEventListener('submit' ,createNewTask)

  function createNewTask(event){
    event.preventDefault();
    let newTaskDescription = document.querySelector('#new-task-description')
    let newTask = document.createElement('li')
    newTask.innerText = newTaskDescription.value

  appendTask(newTask)
  }

  function appendTask(task){
    newTaskUl.appendChild(task)
  }

});
