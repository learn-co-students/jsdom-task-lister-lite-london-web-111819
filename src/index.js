document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // let form_element = document.querySelector("form");
  let form_element = document.getElementById("create-task-form");
  form_element.addEventListener("submit", function(event){
    event.preventDefault();
    let item = document.querySelector("#new-task-description");
    let priority = document.getElementById('priority');
    add_to_list(item.value,priority["selectedIndex"]);
  }
  );

  let reorder_form_element = document.getElementById("reorder-form");
  reorder_form_element.addEventListener("submit", function(event){
    event.preventDefault();
    reorder_tasks();
  }
  );  

});

function reorder_tasks(){
  let target_items = document.querySelectorAll('#tasks > li');
  let target_parent = target_items[0].parentNode
  let p0_li_array=[]; 
  let p1_li_array=[]; 
  let p2_li_array=[];
   //define a new empty array
  for (let i=0; i<target_items.length; i++){
    if (target_items[i].className == "priority-0"){
      p0_li_array.push(target_items[i]);
    };
    if (target_items[i].className == "priority-1"){
      p1_li_array.push(target_items[i]);
    };
    if (target_items[i].className == "priority-2"){
      p2_li_array.push(target_items[i]);
    };
    document.getElementById(target_items[i].id).remove()
  }
  // remove the whole ul? and regenerate?
  // debugger;
  let queue = [p0_li_array,p1_li_array,p2_li_array];
  for (let i_outer=0; i_outer<queue.length; i_outer++){
    for (let i_inner=0; i_inner<queue[i_outer].length; i_inner++){
      target_parent.appendChild(queue[i_outer][i_inner]);
    }
  }

}

function add_to_list(value,priority_index){
  new_button = document.createElement('button');
  new_button.innerHTML = "X";
  new_button.className = "remove-button";
  let timestamp_button = new Date().getTime();
  new_button.id = `button-${timestamp_button.toString()}`; 
  new_button.addEventListener("click",function(event){
    remove_from_the_list(event.target.id);
  });
  new_item = document.createElement('li');
  new_item.textContent = value;
  new_item.style.color = color_based_on_priority(priority_index);
  new_item.className = `priority-${priority_index}`;
  let timestamp_li = new Date().getTime()
  new_item.id = `li-${timestamp_li.toString()}`
  new_item.appendChild(new_button);
  let target = document.querySelector("#tasks");
  target.appendChild(new_item);
}

function remove_from_the_list(id){
  //Find the li for that button
  let target_child = document.getElementById(id).parentNode;
  target_child.remove();
}

function color_based_on_priority(priority_index){
  switch (priority_index) {
    case 0:
      return `Red`;
      break;
    case 1:
      return `Yellow`;
      break;
    default:
      return `Green`;
  }
}