'use strict'

const celciusToKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('Temperature in Celcius: '))
    }

    // console.table(measurement);
    // console.warn(measurement.value);
    // console.error(measurement.value);
    debugger;
    return measurement.value + 273;
}

console.log(celciusToKelvin());
