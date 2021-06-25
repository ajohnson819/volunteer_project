/*
Requirements for JavaScript for the Code Louisville Front-End class
JavaScript Features List
Create a form (such as a ‘Contact Us’ form), validate at least one field (ex: email is in the correct format) and then use that information on your page somehow. For example, display it back to the user on button click, or change a setting on the page based on a section. Having a form that does nothing on clicking Submit or that just refreshes the page is not enough - you must capture the value(s) of the form and use it somehow.
Create a JavaScript function that performs some form of mathematical operation (calculates something) and displays the result on your page or otherwise uses that value to do something on the site.
Create and populate a JavaScript array with one or more values and display the contents of some or all of the array on your page
Create a Javascript loop that dynamically displays HTML on your page - for example displaying a number of list items <li> based on how many times you loop
Create at least 3 variables (var, const, or let), set their values in JavaScript, and display the values somewhere on your page
Create one or more JavaScript objects (such as with multiple values contained in { }’s), modify at least one value of that object, and display it on your site
Show/hide one or more content areas or elements on your site through clicking a button or some other user interaction - must be done with some JavaScript code. 
Allow the user to rearrange or move items by clicking and dragging an element on your site
Other features can be added to this list with mentor or staff permission, but we want to see you stretch your skills, so you’ll want to pick something challenging.

Ask your mentors or staff if there’s something you want to do but doesn’t fit into these requirements. As long as it’s a good demonstration of your programming skills, it almost certainly will count!  Basically, we just want to see you do something interesting and challenging, so don’t let these requirements stifle your creativity!
*/
/////heading button
const myHeader = document.querySelector('.header');
const headingButton = document.querySelector('.changeHeadingButton');
const myHeadingInput = document.querySelector('.headingInput');

headingButton.addEventListener('click', () => {
    myHeader.style.color = myHeadingInput.value;
})

////////////////////list buttons//////////////////////
//---------------------------------------
//hide list button
const toggleListButton = document.getElementsByClassName('toggleList.description');
//the list, not a button
const listDiv = document.querySelector('listOfItems');
//the event listener for toggle button
toggleListButton.addEventListener('click', () => {
    if (listDiv.style.display === 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none'
    }
})


// the list description button
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
//the event listner assigned to the list description modifier
descriptionButton.addEventListener('click', () => {
    descriptionP.textContent.descriptionInput.value + ':'
})


//add and remove buttons
const addItemButton = document.getElementsByClassName('button.addItemButton');
const addItemInput = document.getElementsByClassName('input.addItemInput');
const removeItemInput = document.getElementsByClassName('input.removeItemInput');
//the event listeners for adding/removing content
addItemButton.addEventListener('click', () => {
    let ul = document.createElement('ul')[0];
    let li = document.createElement('li');
    //text content selects the text we want to contain
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = ''
})

removeItemButton.addEventListener('click', () => {
    let ul = document.createElement('ul')[0];
    let li = document.querySelector('li:last-child');
    //text content selects the text we want to contain
    ul.removeChild(li);
    
}) 