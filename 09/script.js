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
