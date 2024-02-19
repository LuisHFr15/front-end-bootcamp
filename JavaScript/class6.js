for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('');

const users = ['Lewis', 'Ana', 'Fred'];

for (const user of users) {
    console.log(user);
}

console.log('');

const person = {name: 'John', age: 14, height: 1.68};

for (const item in person) {
    console.log(item, person[item]);
}