//copyright

const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright  = document.createElement("p");

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