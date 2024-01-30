const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer")
const copyright = document.createElement("p");
 
copyright.innerHTML = "Olga Anokhina" +" "+ thisYear;
//*thisYear.appendChild(copyright);
footer.appendChild(copyright);
const skills = ["JavaScript", "Html", "Excel", "AutoCad", "CSS"];
const skillSection = document.getElementById("skills");
const skillsList = skillSection.querySelector("ul");
for (let i=0; i<skills.length; i++){
  let skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
};
const  messageForm = document.getElementById("leave_message");
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usersName = e.target.usersName.value;
  const usersEmail = e.target.usersEmail.value;
  const usersMessage = e.target.usersMessage.value;
  
  console.log(usersName, usersEmail, usersMessage);
  
  let messageSection = document.getElementById("messages");
  let messageList = messageSection.querySelector("ul");
  let newMessage = document.createElement("li");
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
 
editButton.addEventListener('click', () => {
  if (editButton.innerText.toLowerCase() === "edit") {
    // Make the message editable
    const span = newMessage.querySelector('span');
    const text = span.innerText.replace('wrote: ', '');
    span.innerHTML = `<input type="text" value="${text}">`;
    editButton.innerText = "save";
  } else {
    // Save the edited message
    const input = newMessage.querySelector('input');
    const newText = input.value;
    newMessage.querySelector('span').innerText = `wrote: ${newText}`;
    editButton.innerText = "edit";
  }
});




});
/*var githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/OlgaAnokhina/repos');
githubRequest.send();*/

fetch('https://api.github.com/users/OlgaAnokhina/repos')
.then(response => { return  response.json()})
.then(repositories => {
//.catch(error => console.error('Error:', error));

/*githubRequest.addEventListener("load", function()  {
let repositories = JSON.parse(this.response);
console.log(repositories);

//*Display Repositories in List*/
let projectSection = document.getElementById('projects');
let projectList = projectSection.querySelector('ul');
for (let i = 0; i < repositories.length; i++) {
  let project = document.createElement('li');

console.log(repositories[i])
  project.innerHTML = `<a href = "${repositories[i].html_url }" target="_blank"> ${repositories[i].name}</a>`
  projectList.appendChild(project);
}
});
/*.catch(error) => {
console.error('Fetch error:', error);
}*/