var today = new Date();
var year = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = 'Andrew Cloer' + year;
footer.appendChild(copyright);
var skills = ['Basic JavaScript', 'Basic HTML'];
var skillsSection = document.getElementById('skills');
var skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    var skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}