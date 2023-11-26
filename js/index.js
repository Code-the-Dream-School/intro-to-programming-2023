const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer")
const copyright = document.createElement("p");
 
copyright.innerHTML = "Olga Anokhina" +" "+ thisYear;
//*thisYear.appendChild(copyright);
footer.appendChild(copyright);
var skills = ["JavaScript", "Html", "Excel"];
var skillSection = document.getElementById("skills");
var skillsList = skillSection.querySelector("ul");
for (i=0; i<skills.length; i++){
  var skill = document.createElement('li');
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
};