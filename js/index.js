
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML= `&copy; Michelle Wagner ${thisYear}`;

footer.appendChild(copyright);

const skills = ['Programming in JavaScript, HTML, CSS','3 years customer service','1 year warehouse','knowledge in using a cash register','problem solving'];

const skillsSection = document.querySelector('#skills');

const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    skills[i];
    const skill = document.createElement('li');
   skill.innerText = skills[i];
   skillsList.appendChild(skill);
}

