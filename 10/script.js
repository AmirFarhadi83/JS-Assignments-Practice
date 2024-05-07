'use strict';

//////////////////////////////////////////////////
// 013
//////////////////////////////////////////////////

// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// // Re-assigning f function
// h();
// f();
// console.dir(f);

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`we are now boarding all ${n} passengers`);
//     console.log(`there are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);
//   console.log(`will start boarding in ${wait} seconds`);
// };

// // const perGroup = 1000;
// boardPassengers(180, 4);

//////////////////////////////////////////////////
// 012
//////////////////////////////////////////////////

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

//////////////////////////////////////////////////
// 011
//////////////////////////////////////////////////

// const runOnce = function () {
//   console.log('nnnnnnnnn');
// };
// runOnce();

// // IIFE
// (function () {
//   console.log('ssssssssss');
//   // var isPrivate = 33;
//   const isPrivate = 33;
// })();

// (() => console.log('hhhhhhhhhhhhh'))();

// {
//   const isPrivate = 33;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);

// console.log(notPrivate);

//////////////////////////////////////////////////
// Coding Challenge #1
//////////////////////////////////////////////////

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     // console.log(poll.answers);
//     this.displayResults();
//   },
//   displayResults() {
//     const type = prompt('String or Array');
//     // console.log(
//     //   type.toLowerCase() !== 'string'
//     //     ? this.answers
//     //     : `Poll results are ${this.answers.join(', ')}`
//     // );
//     if (type.toLowerCase() === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     } else if (type.toLowerCase() === 'array') {
//       console.log(`Result: ${this.answers}`);
//     } else {
//       console.log('Format Not Support');
//     }
//   },
// };

// document
//   .querySelector('.poll')
//     .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // 4.
// // poll.displayResults.call({answers:[1,5,3]})

// // Bonus
// // const register = poll.registerNewAnswer.bind(poll);
// // register([5, 2, 3])

// //   displayResults(arr) {
// //     const type = prompt('String or Array');
// //     if (type.toLowerCase() === 'string') {
// //       console.log(`Poll results are ${arr.join(', ')}`);
// //     } else if (type.toLowerCase() === 'array') {
// //       console.log(`Result: ${arr}`);
// //     } else {
// //       console.log('Format Not Support');
// //     }
// //   },

//////////////////////////////////////////////////
// 009
//////////////////////////////////////////////////

// const iranAir = {
//   airline: 'Iran Air',
//   iataCode: 'IR',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
//   },
// };

// const swiss = {
//   airline: 'Swiss Airline',
//   iataCode: 'LX',
//   bookings: [],
// };

// const mahanAir = {
//   airline: 'Mahan Air',
//   iataCode: 'IR',
//   bookings: [],
// };

// const book = iranAir.book;

// // bind

// const bookIR = book.bind(iranAir);
// const bookLX = book.bind(swiss);

// bookLX(23, 'Ali Rezaei');

// const bookIR23 = book.bind(iranAir, 23);
// bookIR23('Amir Farhadi');

// // with event listeners
// iranAir.planes = 300;
// iranAir.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // iranAir.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', iranAir.buyPlane.bind(iranAir));

// // partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 300));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// // const func = function (value) {
// //   return addVAT(value);
// // };

// // console.log(func(300));

// const func2 = rate => value => value + value * rate;

// const addVAT2 = func2(0.23);

// console.log(addVAT2(100));
// console.log(addVAT2(330));

//////////////////////////////////////////////////
// 008
//////////////////////////////////////////////////

// const iranAir = {
//   airline: 'Iran Air',
//   iataCode: 'IR',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
//   },
// };

// iranAir.book(239, 'Amir Farhadi');
// iranAir.book(293, 'Ali Mohammadi');
// console.log(iranAir);

// const mahanAir = {
//   airline: 'Mahan Air',
//   iataCode: 'IR',
//   bookings: [],
// };

// const book = iranAir.book;

// // Call method
// book.call(iranAir, 56, 'Reza Zavar');
// console.log(iranAir);
// book.call(mahanAir, 98, 'Hossein Kamali');
// console.log(mahanAir);

// const swiss = {
//   airline: 'Swiss Airline',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 786, 'Sara Rezaei');

// // Apply method
// const flightData = [786, 'Ali Rezaei'];
// book.apply(swiss, flightData);

// book.call(swiss, ...flightData);
// console.log(swiss);

//////////////////////////////////////////////////
// 007
//////////////////////////////////////////////////

// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('Hey');

// greeterHey('Amir');
// greeterHey('Ali');

// greet('Hello')('Amir');

//////////////////////////////////////////////////
// 006
//////////////////////////////////////////////////

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-Order function
// const transformer = function (str, fn) {
//   console.log('______________________________');
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed By: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // Js uses callbacks all the time
// const high5 = () => console.log('🖐🏻');
// document.body.addEventListener('click', high5);
// ['ali', 'reza', 'amir'].forEach(high5);

//////////////////////////////////////////////////
// 004
//////////////////////////////////////////////////

// const flight = 'LH234';
// const amir = {
//   name: 'Amir Farhadi',
//   passport: 123456789,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 123456789) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, amir);
// // console.log(flight);
// // console.log(amir);

// // // Is the same as doing...
// // const flightNum = flight;
// // const passenger = amir;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };
// newPassport(amir);
// checkIn(flight, amir);

//////////////////////////////////////////////////
// Default Parameters
//////////////////////////////////////////////////

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
