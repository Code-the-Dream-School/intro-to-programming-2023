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
const messageForm = document.querySelector('form[name="leave_message"]');
const input = messageForm.querySelector("input");
messageForm.addEventListener("submit", (event) => {    

    event.preventDefault();
    
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    
    const ul = document.getElementById('responds');
    const li = document.createElement('li');
    ul.appendChild(li);

    console.log('Name', usersName);
    console.log('Email', usersEmail);
    console.log('Message', usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    const usersLink = document.createElement('a');
    usersLink.href = 'mailto:' + usersEmail;
    usersLink.textContent = usersName;

    const messageSpan = document.createElement('span');
    messageSpan.textContent = usersMessage;

    li.appendChild(usersLink);
    li.appendChild(document.createTextNode(':'));
    li.appendChild(messageSpan);
    ul.appendChild(li);

// remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    li.appendChild(removeButton); 
    messageList.appendChild(newMessage);
    messageForm.reset();  
 }, required);

 //Display Messages in List
document.getElementById('responds').addEventListener('click', (event) => {    
   if (event.target.tagName === 'BUTTON') {
     const li = e.target.parentNode;
     const ul = li.parentNode;
     ul.removeChild(li);
   }
});