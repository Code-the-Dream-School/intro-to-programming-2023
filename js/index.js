var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = 'Larissa Martinez' + thisYear;
footer.appendChild(copyright);
var skills = ['JavaScript', 'HTML', 'CSS'];
var skillsSelection = document.getElementById('skills');
var skillsList = skillsSelection.querySelector('ul');
var skills = ['JavaScript', 'HTML', 'CSS'];
for (var i = 0; i < skills.length; i++) {
  var skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
