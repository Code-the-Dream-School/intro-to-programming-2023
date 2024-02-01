//hint: `new Date()` constructor
const today = new Date();
 let thisYear = today.getFullYear();
 //[ ] Using "DOM Selection", select the `<footer>` element from the DOM and store it in a variable named `footer`
 // - hint: `querySelector` method
 //var x = document.getElementById("mySelect");
 let footer = document.querySelector("footer");  
 //- [ ] Create a new paragraph (`p`) element and store it in a variable named `copyright`
 // - hint: `createElement` method
 let copyright = document.createElement("p");
 //- [ ] Set the inner HTML of your `copyright` element to display your name and the current year
 // - hint: use `thisYear` variable from earlier
 copyright.innerHTML = "Karrington Gatlin " + thisYear;
 
//- [ ] Using "DOM Manipulation", append the `copyright` element to the footer
//- hint: `appendChild` method
footer.appendChild(copyright);
// List your technical skills by creating an Array of String values and store it in a variable named `skills`
let skills = ["HTML","CSS","JavaScript"];
let skillsSection = document.getElementById("skills");
// - [ ] Using "DOM Selection", query the `skillsSection` (instead of the entire `document`) to find the `<ul>` element and store it in a variable named `skillsList`
let skillsList = skillsSection.querySelector("ul");
// Create a `for` loop to iterate over your `skills` Array, starting at index 0
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
  }
  var messageForm= document.querySelector('[name="leave_message"]');
  messageForm.addEventListener("submit",function(event){
    event.preventDefault()
    console.log("im here");
    let userName = event.target.usersName.value;
    let userEmail = event.target.usersEmail.value;
    let userMessage = event.target.usersMessage.value;
    console.log(userName);
    console.log(userEmail);
    console.log(userMessage);
    let messageSection= document.getElementById("messages");
    let messageList= messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.classList.add("messagesStyle");
    newMessage.innerHTML ='<a href= "' +userEmail+'">'+userEmail +'</a>'+'<span"' +userMessage+'">'+userMessage +'</span>';
    let removeButton = document. createElement('button');
    removeButton.innerText= "remove";
    removeButton.classList.add("removeBtn");
    removeButton.addEventListener("click", function(){
    let entry = removeButton.parentElement;
    entry.remove();

  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

    messageForm.reset();
  

  })

  

