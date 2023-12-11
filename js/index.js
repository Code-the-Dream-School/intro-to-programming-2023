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
const messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', function (event) {
    messageForm.addEventListener('submit', function (event) {
        // Prevent the default refreshing behavior
        event.preventDefault();

        // Retrieve the values from the form fields
        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        // Log the values to the console
        console.log('Name:', usersName);
        console.log('Email:', usersEmail);
        console.log('Message:', usersMessage);

        // Clear the form fields
        messageForm.reset();

        // Select the #messages section by id
        const messageSection = document.getElementById('messages');

        // Query the messageSection to find the <ul> element
        const messageList = messageSection.querySelector('ul');

        // Create a new list item (li) element
        const newMessage = document.createElement('li');

        // Set the inner HTML of the newMessage element
        newMessage.innerHTML = `
            <a href="mailto:${usersEmail}">${usersName}</a>
            <span>${usersMessage}</span>
        `;

        // Create a new <button> element
        const removeButton = document.createElement('button');

        // Set the inner text and type attribute of the removeButton
        removeButton.innerText = 'Remove';
        removeButton.type = 'button';

        // Add an event listener to the removeButton element
        removeButton.addEventListener('click', function () {
        // Find the button's parent element using DOM Traversal
        const entry = removeButton.parentNode;

        // Remove the entry element from the DOM
        entry.remove();
  });

        // Append the removeButton to the newMessage element
        newMessage.appendChild(removeButton);

        // Append the newMessage to the messageList element
        messageList.appendChild(newMessage);
});
      });
