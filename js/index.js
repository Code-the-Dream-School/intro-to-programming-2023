const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = 'Dewi Anggraini ' + thisYear;
footer.appendChild(copyright);
const skills = ['JavaScript', 'HTML', 'CSS', 'Problem solving'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (const item of skills){
    console.log(item);
    const skill = document.createElement('li');
    skill.innerText = item;
    skillsList.appendChild(skill);
}
//Handle Message Form Submit
const messageForm = document.getElementById('leave_message');
const messageSection = document.getElementById('message_section');
const messageList = messageSection.querySelector('ul');
messageForm.addEventListener("submit", (event) => {    

    event.preventDefault();
    
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    
    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);  
  
    const newMessage = document.createElement('li');

    messageForm.reset();
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>wrote: ${usersMessage}</span>`;   

// remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove'; 
    removeButton.type = "button";    
    
    removeButton.addEventListener('click', (event) => { 
        event.preventDefault();

        const entry = removeButton.parentNode;
        entry.remove();

     });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

 });
 const githubRequest = new XMLHttpRequest();
 githubRequest.open("GET", "https://api.github.com/users/dewi-anggraini/repos");
 
 githubRequest.send();

 githubRequest.addEventListener('load', function () {
    if (githubRequest.status === 200) {
        const repositories = JSON.parse(this.response);
        console.log(repositories);

        const projectSection = document.getElementById('projects');
        const projectList = projectSection.querySelector('#projects ul');

        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            project.innerText = repositories[i].name;

            projectList.appendChild(project);
        }
    } else {
        console.error('Error fetching repositories:', githubRequest.statusText);
    }
 });
 


