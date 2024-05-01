'use strict';

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
