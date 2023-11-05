const weight = prompt('Enter your weight in kg');
const height = prompt('Enter your height in m');

const bodyMassIndex = weight / Math.pow(height, 2);

const areYouOverWeight = bodyMassIndex >= 25;

console.log(bodyMassIndex);
console.log(areYouOverWeight);

alert('Are you overweight? ' + areYouOverWeight);
