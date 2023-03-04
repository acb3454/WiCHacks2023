function addTask() {
    task = document.getElementById('task1').valueOf;
    newtask = document.createTextNode(task);
    const p = document.createElement("p");
    p.appendChild(newtask);
    const current_task = document.getElementById('task-input-things');
    current_task.appendChild(p);
}