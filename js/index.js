var today = new Date();

var thisYear = today.getFullYear();

var footer = document.querySelector('footer');

var copyright = document.createElement('p');

copyright.innerHTML = 'Noah Glymph' + thisYear;

footer.appendChild(copyright);

var skills = ["HTML", "CSS" , "JavaScript" , "Git"]

var skillsSection = document.getElementById('skills');

var skillsList = skillsSection.queryselector('ul');

for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement('li');
    skill.innertext = skills[i];
    skillsList.appendChild(skill);
}