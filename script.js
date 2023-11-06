ruslanObject = {
    name: "Ruslan",
    lastName: "Satybaev",
    birthYear: 1988,
    job: "programming",
    familyMembers: [
        'Zabida', 'Alfia'
    ],
    hasDriverLicense: false,
    calcAge: function () {
        this.age = 2023 - this.birthYear
    }
}

ruslanObject.calcAge();
console.log(ruslanObject.age);

console.log(`${ruslanObject.name} is a ${
    ruslanObject.age}-year old ${
    ruslanObject.job} and he has ${
    ruslanObject.hasDriverLicense ? 'a' : 'not'} driver license
`)
