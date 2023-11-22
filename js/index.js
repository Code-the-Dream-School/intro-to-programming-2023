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