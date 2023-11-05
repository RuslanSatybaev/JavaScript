const brand = 'Toyota';
const model = 'Camry';
const color = 'grey';
const year = '2000';

let carHtml;

carHtml = `
    <h3>Car Description</h3>
    <ul>
        <li>Brand: ${brand}</li>
        <li>Model: ${model}</li>
        <li>Color: ${color}</li>
        <li>Year: ${year}</li>
        <li>Doors: ${getDoors()}</li>
        <li>Tax: ${year < 2000 ? '20%' : '10%'}</li>
    </ul>
`
function getDoors(){
    return 5;
}

document.body.innerHTML = carHtml;
