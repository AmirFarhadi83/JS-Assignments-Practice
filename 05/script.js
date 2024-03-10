// Remember, we're gonna use strict mode in all scripts now!
'use strict'

const printForecast = function (arr) {
    let sen = `... `
    for (let i = 0; i < arr.length; i++) {
        sen += `${arr[i]}C in ${i + 1} days ... `;
    }
    return sen;
}

const data = printForecast([12,5,-5,0,4]);
console.log(data)