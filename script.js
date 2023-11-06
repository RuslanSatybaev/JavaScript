ruslanObject = {
    name: "Ruslan",
    lastName: "Satybaev",
    birthYear: 1988,
    job: "programming",
    familyMembers: [
        'Zabida', 'Alfia'
    ]
}

console.log(ruslanObject.name);

console.log(ruslanObject['lastName']);

const userInput = prompt('What do you want know about Ruslan?' +
    'Choose between name, lastname, birthYear, familyMembers');

if (ruslanObject[userInput]) {
    console.log(ruslanObject[userInput])
} else {
    alert('Wrong input');
}

ruslanObject.location = 'Russia';
ruslanObject['telegram'] = '@ruslansatybaev';

console.log(ruslanObject);

console.log(`${ruslanObject.name} has ${ruslanObject
    .familyMembers.length} family members and the first one is ${ruslanObject
    .familyMembers[0]}`)
