function addTask() {
    //gets the task input value
    const task = document.getElementById('task1').value;
    newtask = document.createTextNode(task);
    console.log("got new task " + task);

    //make checkbox element
    const checkbox = document.createElement("INPUT");
    checkbox.type = "checkbox";
    checkbox.id = "task";

    //put task in label
    const tasklabel = document.createElement("label");
    tasklabel.htmlFor = "checkbox";
    tasklabel.appendChild(newtask);
    
    checkbox.appendChild(tasklabel);

    //put current task on the list
    const tasklist = document.getElementById('task-input-things');
    tasklist.appendChild(checkbox);
    console.log("appended task as child in input");
    document.getElementById('task1').value = '';
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}