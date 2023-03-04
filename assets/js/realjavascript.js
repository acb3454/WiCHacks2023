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