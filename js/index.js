const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Dewi Anggraini ${thisYear}`;
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
let messageSection = document.getElementById('messages');
let messageList = messageSection.querySelector('ul');
let newMessage = document.createElement('li');
newMessage.getElementByName('usersName').innerHTML = "<a href=mailto: + newMessage.getElementByName('usersEmail').email>";
removeButton.innerText = 'remove';
removeButton.Type = 'button';
removeButton.addEventListener('click', () => {
    let entry = document.getElementByType('button').parentNode.nodeName;
    entry.remove();
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});
messageForm.addEventListener("submit", function(event){
document.getElementsByName('leave_message').reset();    
event.preventDefault();
    let usersName = event.target.usersName;
    let usersEmail = event.target.usersEmail;
    let usersMessage = event.target.usersMessage;
    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);
 }, true);   
const messageForm = document.getElementsByName('leave_message');