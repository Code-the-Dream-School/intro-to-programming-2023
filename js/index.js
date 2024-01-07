let today = new Date ()
console.log(today)
let thisYear= today.getFullYear() 

let footer = document.querySelector("footer")

let copyright = document.createElement("p")

copyright.innerHTML =  `Cynthia Delevante ${thisYear}`

footer.appendChild(copyright) 

let skillsSection = document.getElementById('skills') 
console.log(skillsSection) 

let skillsList = skillsSection.querySelector( "ul") 

let skills = ["critical thinking", "Communication", "Javascript"] 

for(let i = 0 ; i < skills.length; i++) {
    let skill = document.createElement("li") 
    skill.innerHTML = skills[i] 
    skillsList.appendChild(skill)
}
