//Footer

const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `Ridge ${thisYear}`;

footer.appendChild(copyright);

//Skill

const skills = ["Javascript", "HTML", "Welding", "CSS"];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");

    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// Create Form

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener('submit', (e) => {
    console.log('hello');
    e.preventDefault();

    const userName = e.target.usersName.value;
    const userEmail = e.target.usersEmail.value;
    const userMessage = e.target.usersMessage.value;

    if (userName.trim() === "" || userEmail.trim() === "" || userMessage.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a>: 
    <span>${userMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    newMessage.appendChild(removeButton);

    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();
    })

    messageList.appendChild(newMessage);
    e.target.reset();
});