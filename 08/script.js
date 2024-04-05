'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millennial = true;
            const str = `Oh, you're millennial, ${firstName}`;
            console.log(str);
        }
        console.log(millennial);
    }
    
    return printAge();
}

const firstName = 'Amir';
calcAge(1988);
  