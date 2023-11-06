const user123 = ['Ruslan', 'Satybaev', 1988, 'developer',
    ['Zabida', 'Alfia'], true];

const types = [];

for (let i = 0; i < user123.length; i++) {
    console.log(user123[i], typeof user123[i]);

    types.push(typeof user123[i]);
}
console.log(types);