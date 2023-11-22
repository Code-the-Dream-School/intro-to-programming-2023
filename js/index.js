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

  skill.innertext = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.querySelector('form[name="leave_message"]');


messageForm.addEventListener("submit", function (event) {

    event.preventDefault();

const usersName=event.target.usersName.value;
const usersEmail= event.target.usersEmail.value;
const usersMessage= event.target.usersMessage.value;

console.log(usersName, usersEmail, usersMessage);

const messageSection = document.getElementById("messages");

document.getElementById("leave_a_message").reset();

const messageList = messageSection.querySelector("ul");

const newMessage = document.createElement("li");
    
newMessage.innerHTML= 
 <a href="mailto: ${usersEmail}">${usersName}</a>

<span> typed: ${usersMessage}</span>

const removeButton = document.createElement("button");
removeButton.innerText="remove";
removeButton.type="button";

});

removeButton.Button.addEventListener("click", function() {

const entry = removeButton.parentNode;

entry.remove();

if (messageSection.style.display ="inline-block" && messageList.childElementCount == 0){
    messageForm.style.display = "none";
};
});

newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);
