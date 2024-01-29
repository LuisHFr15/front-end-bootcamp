// let -> block (preferred)
// var -> block/global
// const -> block (can't be changed)

// alert(...) -> create an alert on the site

let person = {name: 'John', age: 55}; // JS objects
console.log(person.name);

function example() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        arr[i] = i;
    }
    console.log(arr);
}

example();


// Methods -> functions in objects

let example = {
    name: 'Lewis', // property
    greet() { // method
        console.log('hi!')
    }
};

example.greet();