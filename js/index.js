const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer")
const copyright = document.createElement("p");
 
copyright.innerHTML = "Olga Anokhina" +" "+ thisYear;
//*thisYear.appendChild(copyright);
footer.appendChild(copyright);
var skills = ["JavaScript", "Html", "Excel"];
var skillSection = document.getElementById("skills");
var skillsList = skillSection.querySelector("ul");
for (i=0; i<skills.length; i++){
  var skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
};
var  messageForm = document.getElementById("leave_message");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usersName = e.target.usersName.value;
  const usersEmail = e.target.usersEmail.value;
  const usersMessage = e.target.usersMessage.value;
  
  console.log(usersName, usersEmail, usersMessage);
  
  var messageSection = document.getElementById("messages");
  var messageList = messageSection.querySelector("ul");
  var newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href = "mailto: userEmail">  ${usersName} </a>
  <span>wrote:${usersMessage}</span> &nbsp  `
  messageList.appendChild(newMessage);

  messageForm.reset();  
const removeButton=document.createElement('button');
removeButton.innerText = "remove";
removeButton.type = "button";
newMessage.appendChild(removeButton);

removeButton.addEventListener('click', () => {
  newMessage.remove();
});


} );