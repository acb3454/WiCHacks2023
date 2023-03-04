function addTask() {
    //gets the task input value
    task = document.getElementById('task1').value;
    console.log("got new task " + task);
    //put task in text node
    newtask = document.createTextNode(task);
    console.log("made text node of new task " + newtask);
    //make checkbox element
    const c = document.createElement("INPUT");
    c.setAttribute("type", "checkbox");
    c.setAttribute("name", newtask);
    console.log("added checkbox of new task " + c);
    c.appendChild(newtask);
    //put current task on the list
    const current_task = document.getElementById('task-input-things');
    current_task.appendChild(c);
    console.log("appended task as child in input");
    document.getElementById('task1').value = '';
}