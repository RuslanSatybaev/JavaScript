'use strict'

const humidities = [32, 45, 29, 19, 'error', 58, 71, 47, 33, 42, 51, 49];
const humidities2 = [1,20,53];

const calculateHumiditiesAmplitudeTwoArrays = function (h1, h2) {

    const humidities = h1.concat(h2);
    console.log(humidities);

    let max = humidities[0];
    let min = humidities[0];
    for (let i = 1; i < humidities.length; i++) {
        const humidity = humidities[i];

        if (typeof humidity !== 'number') {
            continue;
        }
        if (humidity > max) {
            max = humidity;
        }
        if (humidity < min) {
            min = humidity;
        }

    }
    console.log(min, max);
    return max - min;
}

console.log(calculateHumiditiesAmplitudeTwoArrays(humidities, humidities2));
