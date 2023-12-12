//Getting year for footer
const today = new Date(); 
const year = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
//Adding name to footer
copyright.innerHTML = 'Andrew Cloer ' + year;
footer.appendChild(copyright);
//Adding skills list and connecting it to html
const skills = ['Basic JavaScript', 'Basic HTML', 'Basic CSS'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
//Adding interactivity to message forum
const messageForm = document.forms['leave_message']
const input = messageForm.querySelector("input");
messageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = event.target.elements.userName.value;
    const userEmail = event.target.elements.userEmail.value;
    const userMessage = event.target.elements.userMessage.value;
    const ul = document.getElementById('responses');
    const li = document.createElement('li');
    ul.appendChild(li);
    const messageSection = document.getElementById('userMessages');
    const messageList = document.querySelector('#messageSection');
    const newMessage = (li);
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:' + userEmail;
    emailLink.textContent = userName;
    const messageSpan = document.createElement('span');
    messageSpan.textContent = userMessage;
    li.appendChild(emailLink);
    li.appendChild(document.createTextNode(': '));
    li.appendChild(messageSpan);
    ul.appendChild(li);
    //Adding a remove button
    const button = document.createElement('button');
    button.textContent = 'remove';
    messageForm.reset();
    li.appendChild(button);
});
//Making remove button work
document.getElementById('responses').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }
});
