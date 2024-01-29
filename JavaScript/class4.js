// managing css classes with js

const element = document.getElementById('id');
element.className = 'first-class';
element.className = 'second-class'; // overwrited the previous one with this class
element.classList.add('third-class'); // added another class without removing the previous
element.classList.remove('second-class'); // removed one class, without deleting the recently added