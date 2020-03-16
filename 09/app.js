const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("I'm a regular log!");

// Interpolated
console.log('I am a %s string!', 'Jason-created');

// Styled
console.log('%cI am some styled text!', 'font-size: 50px; background: green');

// warning!
console.warn('Oh noooooooo');

// Error :|
console.error("You've got a problem!");

// Info
console.info("Console.info doesn't appear to do anything anymore");

// Testing
console.assert(1 === 2, "One doesn't equal two :( ");

// clearing
// Undermines the entire point of this exercise!
// console.clear()

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(dog.name);
    console.log(dog.age);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Jason');
console.count('Jason');
console.count('Jason');
console.count('Jason');


// timing
console.time('fetching data');
console.timeEnd('fetching data');

