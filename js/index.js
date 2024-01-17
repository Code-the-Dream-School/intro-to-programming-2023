var today = new Date();
var thisYear = today.getFullYear();
var footer = document.querySelector('footer');
var copyright = document.createElement('p');
copyright.innerHTML = 'Larissa Martinez' + ' ' + thisYear;
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
var messageForm = document.forms.leave_message;
messageForm.addEventListener('submit', function(event) {
  event.preventDefault();
var usersName = event.target.usersName.value;
var usersEmail = event.target.usersEmail.value;
var usersMessage = event.target.usersMessage.value;
console.log('Name:', usersName);
console.log('Email:', usersEmail);
console.log('Message:', usersMessage);

var messageSection = document.getElementById('messages');
var messageList = messageSection.querySelector('ul');
var newMessage = document.createElement('li');
newMessage.innerHTML = '<a href="mailto:' + usersEmail + '">' + usersName + '</a>' +
'<span>' + usersMessage + '</span>';
var removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.type = 'button';
removeButton.addEventListener('click', function() {
  var entry = removeButton.parentNode;
  entry.remove();
});
newMessage.appendChild(removeButton);
messageList.appendChild(newMessage);
messageForm.reset();
});

var githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/larissamc1397/repos", true);

githubRequest.addEventListener("load", function () {
    if (githubRequest.status === 200) {
        var repositories = JSON.parse(githubRequest.response);
        console.log("GitHub Repositories:", repositories);

        var projectSection = document.getElementById("projects");
        var projectList = projectSection.querySelector("ul");

        for (var i = 0; i < repositories.length; i++) {
            var project = document.createElement("li");
            project.innerText = repositories[i].name;
            projectList.appendChild(project);
        }
    }
});

githubRequest.send();
