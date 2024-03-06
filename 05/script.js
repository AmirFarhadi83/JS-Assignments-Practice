// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

const y = 40;
// This function will return the sum of x and y.
function add() {
    "use strict";
    let z = x + y;
    console.log(z);
}

add();  