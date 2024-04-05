'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;

//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             const firstName = 'ali';
//             var millennial = true;
//             const str = `Oh, you're millennial, ${firstName}`;
//             console.log(str);
//         }
//         console.log(millennial);
//     }

//     return printAge();
// }

// const firstName = 'Amir';
// calcAge(1988);

// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Amir';
// let job = 'developer';
// const year = 2004;

// // Functions
// console.log(addDecl(2, 3));
// // console.log(addExp(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExp = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// const amir = {
//   firstName: 'Amir',
//   year: 1987,
//   calcAge: function () {
//     console.log(2037 - this.year);

//     // // Solution 1
//     //   const self = this;
//     // const isMillennial = function () {
//     //   console.log(self);
//     //       console.log(self.year >= 1981 && self.year <= 1996);
//     // //     console.log(this);
//     // //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // Solution 2
//     const isMillennial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
      
//     isMillennial();
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// amir.calcAge();