//adds a task to the list
function addTask() {
    //gets the task input value and puts it in a text node
    const task = document.getElementById('task1').value;
    newtask = document.createTextNode(task);
    console.log("got new task " + task);

    //only make a new checkbox and label if there is stuff to submit
    if ( task != "") {
        //make checkbox element
        const checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        checkbox.id = "task";
        checkbox.onclick = "greyoutLabel";
        // event listeners

        //put task text node and checkbox in label
        const tasklabel = document.createElement("label");
        tasklabel.appendChild(checkbox);
        tasklabel.appendChild(newtask);
    
        //put tasklabel label on the list
        const tasklist = document.getElementById('task-input-things');
        tasklist.appendChild(tasklabel);
        console.log("appended task as child in input");

        //clear input box
        document.getElementById('task1').value = '';
    }
}

//grey out textNode line when checkbox is clicked
function greyoutLabel() {
    const c = document.getElementsByTagName("checkbox");
    //grab the textnode thats in the label with this checkbox
    if (c.checked) {
        console.log("a checkbox was clicked!");
        //change packground color and, strikethrough, and font color

    }
}

function clickoutside(){
  document.getElementById('outsidebutton').style.opacity = 1;
}



// adjusts the size and formatting of navbar on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("nav-text-h1").style.fontSize = "2em";
    document.getElementById("nav-text-h2").style.display = "none";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "60px 10px";
    document.getElementById("nav-text-h1").style.fontSize = "3em";
    document.getElementById("nav-text-h2").style.display = "";
    document.getElementById("logo").style.fontSize = "55px";
  }
}
