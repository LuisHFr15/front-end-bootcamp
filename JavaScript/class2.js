// creating elements

let newElement = document.createElement('a'); // insert an html tag inside the method parameter
newElement.textContent = 'Anchor text';
newElement.href = 'https://google.com';

let parent = document.querySelector('p'); // search for the tag that will receive the new element
parent.append(newElement); // added the new element

let anchorElement = document.querySelector('a');
anchorElement.parentElement.removeChild(anchorElement); // removing the element

