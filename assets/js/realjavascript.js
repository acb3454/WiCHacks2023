function addTask() {
    //gets the task input value
    const task = document.getElementById('task1').value;
    console.log("got new task " + task);

    //put task in text node
    const newtask = document.createElement("label");
    newtask.innerHTML = task;
    console.log("made label of task " + newtask);

    //make checkbox element
    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "task");
    console.log("added checkbox of new task " + checkbox);
    checkbox.appendChild(newtask);

    //put current task on the list
    const tasklist = document.getElementById('task-input-things');
    tasklist.appendChild(checkbox);
    console.log("appended task as child in input");
    document.getElementById('task1').value = '';
}