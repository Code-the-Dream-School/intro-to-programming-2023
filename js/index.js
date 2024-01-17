//copyright

console.log("test");
const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright  = document.createElement("p");

console.log(footer);

copyright.innerHTML = `Allison Berruecos ${thisYear}`

footer.appendChild(copyright);

//skills

const skills = ["Javascript", "HTML", "Microsoft office", "Microsoft Excel", "Customer Service"];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul")

for (let i =0; i < skills.length; i++) {
  const skill = document.createElement("li");

  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}


//Message Form

const messageSection = document.getElementById("messages");

    const messageList = messageSection.querySelector("ul");

const hideMessages = () => {
  if (messageList.childElementCount == 0) {
    messageSection.style.display = "none";
  };
};
 
hideMessages();

// if (messageList.childElementCount == 0) {
//   messageSection.style.display = "none"();
// };

const messageForm = document.getElementById("leave_message");



messageForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const usersName=event.target.querySelector('[name="usersName"]').value;
    const usersEmail= event.target.querySelector('[name="usersEmail"]').value;
    const usersMessage= event.target.querySelector('[name="usersMessage"]').value;

    console.log(usersName, usersEmail, usersMessage);

    const newMessage = document.createElement("li");

    newMessage.innerHTML= 
    `<a href="mailto: ${usersEmail}">${usersName}</a><span> typed: ${usersMessage}</span>`

    const removeButton = document.createElement("button");
    removeButton.innerText="remove";
    removeButton.type="button";

    removeButton.addEventListener("click", (event) => {
    let entry= event.target.parentNode
    entry.remove();
    })

    newMessage.appendChild(removeButton);

    messageList.append(newMessage);

    event.target.reset()
    
    hideMessages();
})

// ajax

const githubRequest = new XMLHttpRequest();
const url = "https://api.github.com/users/Alli12324/repos"

// console.log(url);

githubRequest.open("GET", url);
githubRequest.send();

githubRequest.addEventListener("load", function(){
  const repositories= JSON.parse(githubRequest.responseText);
console.log(repositories);

const projectSection = document.getElementById("projects");

const projectList = projectSection.querySelector("ul");

for (let i = 0; i < repositories.length; i++) {
  const project = document.createElement("li");
  const link = document.createElement("a");
  const date = document.createElement("span");

  link.innerText = repositories[i].name;
  link.href = repositories[i].html_url;
  
  const dateOfrepo = repositories[i].created_at.split("T")[0];
  date.innerText = ` -${dateOfrepo}`;
  console.log(dateOfrepo);

project.appendChild(link);
project.appendChild(date);
projectList.appendChild(project);
}
});