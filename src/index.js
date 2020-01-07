document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector("#create-task-form")
  
  form.addEventListener("submit", function(e) {
    e.preventDefault()
    let name = document.querySelector('input[name="new-task-description"]').value
  

    let li = document.createElement("li")
    li.innerText = `${name}`

    document.querySelector("#tasks").appendChild(li)
  
  });
});


