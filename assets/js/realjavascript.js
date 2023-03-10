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

//function to handle water tracking
function addwater(element){
  console.log(element);
  const image = element.querySelector('img');
  image.src="assets/media/halfemptywater.png"
  element.style.opacity = 1;
  doplantwater();
}

//function to handle outdoors tracking
function addsun(element){
  element.style.opacity = 1;
  doplantsun();
}

function doplantsparkle() {
  // Change photo in panel 2
  console.log("doing plant sparkle things");
  const flowerphoto = document.getElementById("flowerImage");
  const originalflower = flowerphoto.src;
  console.log("current source " + flowerphoto.src);

  flowerphoto.src = "assets/sprites/sparkle.png";
  console.log("new source " + flowerphoto.src);

  // Wait for 0.6 seconds and switch back to original photo
  setTimeout(function() {
    flowerphoto.src = originalflower + "?" + Date.now();
  }, 600);
}

function changeplant(element){
  //if the flower in carousel is clicked
  //set the img src in flowerphoto to the carousel img src
  console.log(element);
  const image = element.querySelector('img');
  const imageSrc = image.getAttribute('src');
  // Change plant photo
  console.log("switching out the plant");
  //get current flower photo
  const flowerphoto = document.getElementById("flowerImage");
  console.log("current source " + flowerphoto.src);

  //set the panel 2 main flower img src to the src from input img
  flowerphoto.src = image.src;
  console.log("new source " + flowerphoto.src);

  
}

function doplantwater() {
  // Change photo in panel 2
  console.log("doing plant watering");
  const flowerphoto = document.getElementById("flowerImage");
  const originalflower = flowerphoto.src;
  console.log("current source " + flowerphoto.src);

  flowerphoto.src = "assets/sprites/watering-can.png";
  console.log("new source " + flowerphoto.src);
  // Wait for 0.6 seconds and switch back to original photo
  
  setTimeout(function() {
    flowerphoto.src = originalflower + "?" + Date.now();
  }, 600);
}


function doplantsun() {
  // Change photo in panel 2
  console.log("giving the plant some sunshine");
  const flowerphoto = document.getElementById("flowerImage");
  const originalflower = flowerphoto.src;
  console.log("current source " + flowerphoto.src);

  flowerphoto.src = "assets/sprites/sun.png";
  console.log("new source " + flowerphoto.src);
  // Wait for 0.6 seconds and switch back to original photo
  
  setTimeout(function() {
    flowerphoto.src = originalflower + "?" + Date.now();
  }, 600);
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
    document.getElementById("color-swatches").style.height = "1vh";


  } else { 
    //expanded version
    //if the page has scrolled once but is back at the top. still overrides the initial styles
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("nav-text-h1").style.fontSize = "3em";
    document.getElementById("nav-text-h2").style.display = ""; //shows the h2
    document.getElementById("logo").style.height = "150px";
    document.getElementById("logo").style.left = "60px";
    document.getElementById("logo").style.top = "40px";
    document.getElementById("color-swatches").style.height = "55px";
  }


  //send a reminder to drink water after being on the website for 
  document.getElementById('outsidebutton').onload = function() {setTimeout(drinkWaterReminder()), 2000};
  function drinkWaterReminder() {
    alert("Have you drank any water in the past 30 minutes? You have only drank X bottles of water today.");
  }


  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }


}
