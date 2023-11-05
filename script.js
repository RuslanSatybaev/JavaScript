function printText() {
    console.log('Hello to everyone!');
}

printText();
printText();

function colorizer(item, color) {
    return `The ${item} is ${color}`;
}

const messageFromColorizer = colorizer('desc', 'red');
console.log(`We have the following message: ${messageFromColorizer}`);