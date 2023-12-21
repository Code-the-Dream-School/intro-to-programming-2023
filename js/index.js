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
messageForm.addEventListener("submit", function(event){    

    event.preventDefault();
    
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    
    console.log('Name', usersName);
    console.log('Email', usersEmail);
    console.log('Message', usersMessage);

    messageForm.reset();
 }, true);

 //Display Messages in List
const messageSection = document.getElementById('messages');
const messageList = messageSection.querySelector('ul');
const newMessage = document.createElement('li');
const removeButton = document.createElement('button');

removeButton.addEventListener('click', () => {    
    removeButton.innerText = 'remove';
    removeButton.Type = 'button';
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>${usersMessage}</span>`;    
    const entry = removeButton.parentNode;
    entry.remove();
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
});