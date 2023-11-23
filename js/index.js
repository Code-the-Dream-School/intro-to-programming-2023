const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Dewi Anggraini ${thisYear}`;
footer.appendChild(copyright);
const skills = ['JavaScript', 'HTML', 'CSS', 'Problem solving'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
for (let i of skills){
    console.log(i);
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
    
