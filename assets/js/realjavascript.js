function addTask() {
    task = document.getElementById('task1').value;
    console.log("got new task" + task);
    newtask = document.createTextNode(task);
    console.log("made text node of new task" + newtask);
    const p = document.createElement("p");
    console.log("added paragraph of new task" + p);
    p.appendChild(newtask);
    const current_task = document.getElementById('task-input-things');
    current_task.appendChild(p);
    console.log("appended task as child in input");
}