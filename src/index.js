document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formField = document.getElementById('create-task-form');
  const todoItem = document.getElementById('new-task-description');
  todoUl = document.getElementById('tasks');

  formField.addEventListener('submit', function(event) {
    event.preventDefault();
    newLi = document.createElement('li');
    newLi.textContent = todoItem.value;
    todoUl.appendChild(newLi);
  })
});
