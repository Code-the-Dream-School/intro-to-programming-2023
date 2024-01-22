const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer")
const copyright = document.createElement("p");
 
copyright.innerHTML = "Olga Anokhina" +" "+ thisYear;
//*thisYear.appendChild(copyright);
footer.appendChild(copyright);
var skills = ["JavaScript", "Html", "Excel", "Word", "AutoCad"];
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
  newMessage.innerHTML = `<a href = "mailto:${usersEmail}">  ${usersName} </a>
  <span>wrote: ${usersMessage}</span> <p></p>` 
const removeButton=document.createElement('button');
const editButton=document.createElement('button');
removeButton.innerText = "remove";
editButton.innerText = "edit";
removeButton.type = "button";
editButton.type = "button";
newMessage.appendChild(removeButton);
newMessage.appendChild(editButton);

messageList.appendChild(newMessage);
messageForm.reset();  

removeButton.addEventListener('click', () => {
  newMessage.remove();
});
 
editButton.addEventListener('click', (event) => {
  newMessage.remove();
});


});
/*var githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/OlgaAnokhina/repos');
githubRequest.send();*/

fetch('https://api.github.com/users/OlgaAnokhina/repos')
.then(response => response.json())
.then(repositories => {console.log(repositories) 
//.catch(error => console.error('Error:', error));

/*githubRequest.addEventListener("load", function()  {
var repositories = JSON.parse(this.response);
console.log(repositories);*/

//*Display Repositories in List*//
var projectSection = document.getElementById('projects');
var projectList = projectSection.querySelector('ul');
for (var i = 0; i < repositories.length; i++) {
  var project = document.createElement('li');
  project.innerText = repositories[i].name;
  projectList.appendChild(project);
}
});
/*.catch(error) => {
console.error('Fetch error:', error);
}*/