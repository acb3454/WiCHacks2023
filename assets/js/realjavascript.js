function addTask() {
    task = document.getElementById('task1').value;
    console.log("got new task" + task);
    newtask = document.createTextNode(task);
    console.log("made text node of new task" + newtask);
    const c = document.createElement("INPUT");
    c.setAttribute("type", "checkbox");
    c.setAttribute("label", newtask);
    console.log("added checkbox of new task" + p);
    //c.appendChild(newtask);
    const current_task = document.getElementById('task-input-things');
    current_task.appendChild(c);
    console.log("appended task as child in input");
    document.getElementById('task1').value = '';
}