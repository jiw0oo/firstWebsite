const listItems = document.querySelectorAll("li");

function toggleDone(e) {
    if(!e.target.className){
        e.target.className = "done";
    } else {
        e.target.className = "";
    }
}


listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});
//made an object to store a value 
//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

//make an image object to store value
const myImage = document.querySelector("img");
//then add a click event toggle
myImage.addEventListener("click", () => {
    //gets image from the source first
    const mySrc = myImage.getAttribute("src");
    //then if the source is mtchcmp.jpeg, the image on the site right now
    if (mySrc === "test-images/mtchcmp.jpeg"){
        //change it to the image you desire
        myImage.setAttribute("src", "test-images/bks.jpeg");
        //just leave the image 
    } else{
        myImage.setAttribute("src", "test-images/mtchcmp.jpeg");
    }
});

//this allows us to create refs to the new button and the heading
//stores each value inside variables
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

//function to set personalized greeting
function setUserName() {
    //prompt function helps users to enter in data in a variable after clicking okay
    //myName is a variable used to store this data
  const myName = prompt("please enter your name :");
  if(!myName){
    //keep calling the function until user enters a name
    //aka recursion
    setUserName();
  }
  //web api storage allows users to store data in a browser and then retrieve it later
  //localStorage.setItem() function is used to create and store a data item
  //data item is called "name" and it stores myName variable value aka user's input
  else{
    localStorage.setItem("name", myName);
  //then we set the textContent of the heading to a string that includes the user's stored name
    myHeading.textContent = `Hello, ${myName}!`;
  }
  
}

//! to check if the name is stored or not yet in the localStorage
if (!localStorage.getItem("name")) {
    //if not setUserName() function runs to create it
  setUserName();

} else {
    //we "get" the stored name value (getItem) if the user has visited before  
  const storedName = localStorage.getItem("name");
  //we do the same thing as setUserName function to make content of text
  //heading to string
  myHeading.textContent = `Hello, ${storedName}!`;
}
//add a click event handler function to the button declared before
//to click on the function for the users
myButton.addEventListener("click", () => {
    //if this button is clicked, then setUserName() function runs
  setUserName();
});
