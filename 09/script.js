'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Ang elo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 Object
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be Delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Hey There is Your Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////////
// String Methods Practice
//////////////////////////////////////////////////



//////////////////////////////////////////////////
// Coding Challenge #4
//////////////////////////////////////////////////

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

// // underscore_case
// //  first_name
// // Some_Variable
// //   calculate_AGE
// // delayed_departure

// // const textFunc = function (text) {
// //   const strLow = text.toLowerCase();
// //   const strSplit = strLow.split('_');
// //   const strCamel = [];
// //   const strArr = [];

// //   for (const t of strSplit) {
// //     strCamel.push(t.replace(t[0], t[0].toUpperCase()));
// //   }

// //   const newStr = strCamel
// //     .join('')
// //     .replace(strCamel[0], strCamel[0].toLowerCase());

// //   for (const i of newStr) {
// //     i.padStart(25, "+");
// //     console.log(i);
// //   }
// //   strArr.push(newStr.split('\n'));
// //   console.log(strArr);
// //   console.log(newStr);

// //   // console.log(strCamel);
// //   // console.log(newStr);
// // };

// // textFunc('ali_Reza');
// // textFunc(
// //   'underscore_case\nfirst_name\nSome_Variable\ncalculate_AGE\ndelayed_departure'
// // );

//////////////////////////////////////////////////
// Strings Part-3
//////////////////////////////////////////////////

// // Split and join
// console.log('a+very+nice+string'.split('+'));
// console.log('Amir Farhadi'.split(' '));

// const [firstName, lastName] = 'Amir Farhadi'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('amir farhadi');

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Amir'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(2467624575427));
// console.log(maskCreditCard(7846764378234242));
// console.log(maskCreditCard('9878624675247687924'));

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(16);

//////////////////////////////////////////////////
// Strings Part-2
//////////////////////////////////////////////////

// const airline = 'Iran Air';

// console.log(airline.toLowerCase());
// console.log('Amir'.toUpperCase());

// // Fix Capitalization in name
// const passenger = 'aMiR';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@amir.io';
// const loginEmail = '   Hello@Amir.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// // replacing
// const priceGB = '288,97^';
// const priceUS = priceGB.replace('^', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Boolean
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Airb'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of NEW Airbus family');
// }

// // Practice Exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a Pocket of Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

//////////////////////////////////////////////////
// Strings Part-1
//////////////////////////////////////////////////

// const airline = 'Iran Air';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Air'));

// console.log(airline.slice(5));
// console.log(airline.slice(5, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat 😬');
//   } else {
//     console.log('You got lucky 😎');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('4E');

// console.log(new String('Amir'));
// console.log(typeof new String('Amir'));

// console.log(typeof new String('Amir').slice(1));

//////////////////////////////////////////////////
// Coding Challenge #3
//////////////////////////////////////////////////

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// // console.log(events);
// // console.log(`There is ${events.length} events :${[...events]}`);

// // 2.
// gameEvents.delete(64);
// // console.log(gameEvents);

// // 3.
// // let max = 0;
// // for (const [x] of gameEvents) {
// //   if (x > max) max = x;
// // }
// // const time = max;

// const time = [...gameEvents.keys()].pop();

// console.log(`An event happened, on
// average, every ${time / gameEvents.size} minutes`);

// // 4.
// for (const [x, eve] of gameEvents) {
//   const half = x <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${x}: ${eve}`);
// }

//////////////////////////////////////////////////
// Map:  Iteration
//////////////////////////////////////////////////

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz App
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// // const answer = Number(prompt('Your Answer'));

// // console.log(question.get('correct') === answer ? question.get(true) : question.get(false));

// // console.log(question.get(question.get('correct')===answer));

// // convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

//////////////////////////////////////////////////
// Map:  Fundamentals
//////////////////////////////////////////////////

// const rest = new Map();
// rest.set('name', 'Amir');
// rest.set(1, 'Iran');
// console.log(rest.set(2, 'Tehran'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'we are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

//////////////////////////////////////////////////
// Sets
//////////////////////////////////////////////////

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('Amir'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // const staffUnique = new Set(staff);
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('AmirFarhadi').size);

//////////////////////////////////////////////////
// Coding Challenge #2
//////////////////////////////////////////////////

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const x of odds) {
//   average += x;
// }
// average /= odds.length;
// console.log(average);

// // 3.
// // let x = 0;
// // for (const [team, odd] of Object.entries(game.odds)) {
// //   x++;
// //   console.log(
// //     `Odd of ${x === 1 || x === 3 ? 'victory' : 'draw'} ${
// //       x === 1 || x === 3
// //         ? x === 1
// //           ? 'Bayern Munich'
// //           : 'Borrussia Dortmund'
// //         : ''
// //     }: ${odd}`
// //   );
// // }

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }

// // 4.
// // let r=0
// // for (const w of game.scored) {

// // }

//////////////////////////////////////////////////
// Looping Objects Keys, Values and Entries
//////////////////////////////////////////////////

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

//////////////////////////////////////////////////
// Optional Chaining
//////////////////////////////////////////////////

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// };

// // console.log(restaurant.openingHours.mon.open);

// // With Optional Chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// };

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Amir', email: 'amir@gmail.com' }];
// // const users = [];

// console.log(users[0]?.name ?? 'user array empty');

// if (users.length>0) console.log(users[0].name); else console.log('user array empty');

//////////////////////////////////////////////////
// Enhanced Object Literals
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Looping Arrays
//////////////////////////////////////////////////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (const item of menu) console.log(item);

// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}: ${item[1]}`);
// // };
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // console.log([...menu.entries()]);

//////////////////////////////////////////////////
// Coding Challenge #1
//////////////////////////////////////////////////

// // 1
// // const players1 = [...game.players[0]];
// // const players2 = [...game.players[1]];
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5
// // const team1 = game.odds.team1;
// // const draw = game.odds.x;
// // const team2 = game.odds.team2;
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6
// const printGoals = function (...players) {
//   console.log(`${players.length} goal were scored`);
//   for (let i = 0; i < players.length; i++) {
//     console.log(`player number ${i + 1} : ${players[i]}`);
//   }
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7
// // const team1Win = team1 > team2;
// // const team2Win = team2 > team1;
// // console.log((team1Win ??= team2Win));

// team1 > team2 && console.log('Team 2 is more likely to win');
// team1 < team2 && console.log('Team 1 is more likely to win');

//////////////////////////////////////////////////
// Logical Assignments Operators
//////////////////////////////////////////////////

// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   ownerL: 'Gioanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // Nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

//////////////////////////////////////////////////
// Nullish Operators
//////////////////////////////////////////////////

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//////////////////////////////////////////////////
// Short Circuiting (&& and ||) Operators
//////////////////////////////////////////////////

// console.log('---- OR ----');
// // Use ANY data type, return ANY data type,short-circuiting
// console.log(3 || 'Amir');
// console.log('' || 'Amir');
// console.log(true || 0);
// console.log(undefined || null);
// console.log(undefined || 0 || '' || 'HI' || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Amir');
// console.log(7 && 'Amir');

// console.log("HI" && 23 && null && "Amir");

// // Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'cheese');
// };

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'cheese');

//////////////////////////////////////////////////
// Rest Operator
//////////////////////////////////////////////////

// // 1) Destructuring
// // SPREAD, Because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, Because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//   }
//   console.log(sum);
// }
// add(2, 3);
// add(2, 3, 4, 5, 5);
// add(2, 3, 4, 5, 6, 6, 7, 8);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'cheese', 'olives');
// restaurant.orderPizza('mushrooms');

//////////////////////////////////////////////////
// Spread Operator
//////////////////////////////////////////////////

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 Array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: Arrays, Strings, Sets, Maps, NOT Objects
// const str = 'Amir';
// const letters = [...str, ' ', 'F.'];
// console.log(letters);
// console.log(...str);

// // Example
// // const ingredients = [
// //   prompt("let's Make Pasta! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 2000, ...restaurant, founder: 'Ali' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'kfc';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

//////////////////////////////////////////////////
// Destructure Object
//////////////////////////////////////////////////

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'mashhad',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'tehran',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   sat: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

//////////////////////////////////////////////////
// Destructure Array
//////////////////////////////////////////////////

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(arr);

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching Variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 Return Values from a Function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i,j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
