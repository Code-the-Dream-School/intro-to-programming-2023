// Insert Copyright Text in Footer
const today = new Date();

const thisYear = today.getFullYear();


const footer = document.querySelector("footer");

const copyright = document.createElement("p");
copyright.innerHTML = `Tia ${thisYear}`;

footer.appendChild(copyright);

// Create List of Skills
const skills = ["Digital Marketing, Social Media Marketing, JavaScript, HTML, CSS"];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

//Handle Message Form Submit
const messageForm = document.getElementsByName('leave_message');
messageForm[0].addEventListener('submit', (event) => {
   //Prevent default refresh
    event.preventDefault(); 
   
   //Retrieve values from form submit
   let usersName = event.target.usersName.value;
   let usersEmail = event.target.usersEmail.value;
   let usersMessage = event.target.usersMessage.value;
   console.log(usersName, usersEmail, usersMessage);

   //Displaying messages
   const messageSection = document.getElementById("messages");
   const messageList = messageSection.querySelector("ul");
   const newMessage = document.createElement("li");
   newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
   `;
   messageList.append(newMessage);
   
   const removeButton = document.createElement("button");
   removeButton.innerText = "remove";
   removeButton.type = "button";
   newMessage.append(removeButton);

   removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode;
    entry.remove();
   });

   //Reset form after submit
   document.getElementById("form").reset();
});

/* //Ajax
const githubRequest = new XMLHttpRequest();
const url = "https://api.github.com/users/tiasonora/repos";

githubRequest.open("GET", url);
githubRequest.send();

githubRequest.addEventListener("load", function() {
    const data = JSON.parse(githubRequest.responseText);
    //console.log(data[0].name);
    //console.log(data[0].html_url);
    const projectList = document.querySelector("#projects ul");

    for (let i = 0; i < data.length; i++) {
        const repo = document.createElement("li");

        repo.innerText = data[i].name;
        projectList.appendChild(repo);
    }

}); */

//Fetch
const url = "https://api.github.com/users/tiasonora/repos";

fetch(url)
    .then(response => response.json())
    .then(repos => {
        const projectList = document.querySelector("#projects ul");
        console.log(repos);

    for (let i = 0; i < repos.length; i++) {
        const repo = document.createElement("li");
        const link = document.createElement("a");
        const date = document.createElement("span");

        link.innerText = repos[i].name;
        link.href = repos[i].html_url;

        repo.appendChild(link);
        repo.appendChild(date);

        projectList.appendChild(repo);
    }
});