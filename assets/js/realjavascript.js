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

        // Add onchange event listener to checkbox
        checkbox.addEventListener('change', function() {
          if (this.checked) {
            // Do something when checkbox is checked
            console.log("Checkbox is checked");
            doplantsparkle();
          } 
          else {
            // Do something when checkbox is unchecked
            console.log("Checkbox is unchecked");
          }
  });

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

function clickoutside(element){
  element.style.opacity = 1;
}

function doplantsparkle() {
  // Change photo in panel 2
  console.log("doing plant sparkle things");
  const flowerphoto = document.getElementById("flowerImage");
  console.log("current source " + flowerphoto.src);
  flowerphoto.src = "assets/sprites/sparkle.png";
  console.log("new source " + flowerphoto.src);
}


// adjusts the size and formatting of navbar on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //if the page has scrolled and if it has scrolled more than 50
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("nav-text-h1").style.fontSize = "2em";
    document.getElementById("nav-text-h2").style.display = "none";
    document.getElementById("logo").style.height = "75px";
    document.getElementById("logo").style.left = "30px";
    document.getElementById("logo").style.top = "15px";
    document.getElementById("colors-swatches").style.height = "1vh";


  } else { 
    //if the page has scrolled once but is back at the top. still overrides the initial styles
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("nav-text-h1").style.fontSize = "3em";
    document.getElementById("nav-text-h2").style.display = "";
    document.getElementById("logo").style.height = "150px";
    document.getElementById("logo").style.left = "60px";
    document.getElementById("logo").style.top = "40px";
    document.getElementById("colors-swatches").style.height = "55px";


  }
}
