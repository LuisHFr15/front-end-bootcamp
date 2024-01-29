// events

let element = document.querySelector('a');

function changeText(event) {
    element.textContent = 'clicked';
}

// clicking element
element.addEventListener('click', changeText);


let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    let enteredText = event.target.value;
}

// input element
inputElement.addEventListener('input', retrieveUserInput);
// keypress -> when the key is pressed
// input 