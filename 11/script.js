'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => mov + acc, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => int + acc, 0);
  // const interest = (incomes * 1.2) / 100;
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display Movements
  displayMovements(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

// Event Handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and Message
    labelWelcome.textContent = `Welcome Back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    // Update UI
    updateUI(currentAccount);
  } else {
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Wrong Pin or Username, Log in to get started';
  }
  // Clear Input Fields
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();
  inputLoginUsername.blur();
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  // Clear Input Fields
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();
  inputTransferAmount.blur();
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount?.movements?.some(mov => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount?.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  // Clear Input Fields
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
  inputCloseUsername.blur();
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////////////////////////////
// 003
/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice(-1, 2));
// console.log(arr.slice(-1, -2));
// console.log(arr.slice(-2, -1));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

/////////////////////////////////////////////////
// 004
/////////////////////////////////////////////////

// // AT
// const arr = [23, 11, 64]
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length-1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('amir'.at(0));
// console.log('amir'.at(-1));

/////////////////////////////////////////////////
// 005
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   console.log(
//     movement > 0
//       ? `Movement ${i + 1}: you deposited ${movement}`
//       : `Movement ${i + 1}: you withdrew ${Math.abs(movement)}`
//   );
// }

// console.log('--------------------');

// movements.forEach(function (mov, i, arr) {
//   console.log(
//     mov > 0
//       ? `Movement ${i + 1}: you deposited ${mov}`
//       : `Movement ${i + 1}: you withdrew ${Math.abs(mov)}`
//   );
// });

// // 0: function(200)
// // 0: function(450)
// // 0: function(400)
// // ...

/////////////////////////////////////////////////
// 006
/////////////////////////////////////////////////

// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

// // Set
// const currenciesUnique = new Set(['USD','USD','EUR'
//   , 'GBP', 'EUR'])
// console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// })

/////////////////////////////////////////////////
// Coding Challenge #1
/////////////////////////////////////////////////

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaDog = dogsJulia.slice(1, -2);
//   const allDogs = dogsJuliaDog.concat(dogsKate);
//   allDogs.forEach(function (dog, i) {
//     const adPup =
//       dog >= 3
//         ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
//         : `Dog number ${i + 1} is still a puppy`;
//     console.log(adPup);
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
// // Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// // § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

/////////////////////////////////////////////////
// 011
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(function (mov) {
// //   return mov * eurToUsd;
// // });
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementDesc = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: you ${mov > 0 ? 'deposited' : 'Withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementDesc);

/////////////////////////////////////////////////
// 013
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // const deposits = movements.filter(function (mov) {
// //   return mov > 0;
// // });
// const deposits = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

/////////////////////////////////////////////////
// 014
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// // // accumulator --> SNOWBALL
// // // const balance = movements.reduce(function (acc, cur, i, arr) {
// // //   console.log(`Iteration ${i}: ${acc}`);
// // //   return acc + cur;
// // // }, 0);
// // const balance = movements.reduce((acc, cur) => acc + cur, 0);
// // console.log(balance);

// // let balance2 = 0;
// // for (const mov of movements) balance2 += mov;
// // console.log(balance2);

// // Maximum value
// // const max = movements.reduce((acc, mov) => {
// //   if (acc > mov) return acc;
// //   else return mov;
// // }, movements[0]);
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// );
// console.log(max);

/////////////////////////////////////////////////
// Coding Challenge #2
/////////////////////////////////////////////////

// const calcAverageHumanAge = function (arr) {
//   const humanAge = arr.map(dogAge =>
//     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
//   );
//   const adultDogs = humanAge.filter(humanAge => humanAge >= 18);
//   // const aveAge =
//   //   adultDogs.reduce((acc, humanAge) => acc + humanAge, 0) / adultDogs.length;

//   // 2 3. (2+3)/2 = 2.5 === 2/2 + 3/2 =2.5
//   const aveAge = adultDogs.reduce(
//     (acc, humanAge, i, arr) => acc + humanAge / arr.length,
//     0
//   );

//   console.log(humanAge);
//   console.log(adultDogs);
//   console.log(aveAge);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log('----------------------------');
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

/////////////////////////////////////////////////
// 016
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;
// console.log(movements);

// // PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map((mov, i, arr) => {
//   //   // console.log(arr);
//   //   return mov * eurToUsd;
//   // })
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

/////////////////////////////////////////////////
// Coding Challenge #3
/////////////////////////////////////////////////

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const ave1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const ave2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(ave1, '---', ave2);

/////////////////////////////////////////////////
// 018
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   acc.owner === 'Jessica Davis' && console.log(acc);
// }

/////////////////////////////////////////////////
// 022
/////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements);

// // Equality
// console.log(movements.includes(-130));

// // Some: Condition
// console.log(movements.some(mov => mov === -130));
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// // Every
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Separate Callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/////////////////////////////////////////////////
// 023
/////////////////////////////////////////////////

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[1, [2, 3]], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // flat
// const overallBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

// // flatMap
// const overallBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance2);

/////////////////////////////////////////////////
// test for api
/////////////////////////////////////////////////

// const listEl = document.querySelector('ul');
// fetch('https://fakestoreapi.com/products')
//   .then(res => res.json)
//   .then(data => {
//     data.map(e => {
//       listEl.innerHTML += `<li>${e.title}</li>`;
//     });
//   });

/////////////////////////////////////////////////
// 025
/////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// // Empty Arrays + fill method
// const x = new Array(7);
// console.log(x);
// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

/////////////////////////////////////////////////
// 027
/////////////////////////////////////////////////

// // 1.
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);

// console.log(bankDepositSum);

// // 2.
// // const numDeposits1000 = accounts
// //   .flatMap(acc => acc.movements)
// //   .filter(mov => mov >= 1000).length;

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

// console.log(numDeposits1000);

// // Prefixed ++ operator
// let a = 10;
// console.log(a++);
// console.log(++a);
// console.log(a);

// // 3.
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// // 4.
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

/////////////////////////////////////////////////
// Coding Challenge #4
/////////////////////////////////////////////////

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// // 1.
// const newDogs = dogs.map(dog => ({
//   ...dog,
//   recommendedFood: Math.trunc(dog.weight ** 0.75 * 28),
// }));

// // 2.
// console.log('------- 2 -------');

// // newDogs.filter(dog => dog.owners.includes('Sarah') && console.log(dog));
// const dogSara = newDogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSara);
// console.log(
//   `Sarah's dog is eating ${
//     dogSara.curFood > dogSara.recommendedFood ? 'much' : 'little'
//   } food`
// );

// // 3.
// // const tooMuch = dog => dog.curFood > dog.recommendedFood * 0.9;
// // const tooLittle = dog => dog.curFood < dog.recommendedFood * 1.1;

// // const { ownersEatTooMuch, ownersEatTooLittle } = newDogs.reduce(
// //   (temps, dog) => {
// //     tooMuch(dog)
// //       ? temps.ownersEatTooMuch.push(dog)
// //       : tooLittle(dog) && temps.ownersEatTooLittle.push(dog);
// //     return temps;
// //   },
// //   { ownersEatTooMuch: [], ownersEatTooLittle: [] }
// // );
// const ownersEatTooMuch = newDogs
//   .filter(dog => dog.curFood > dog.recommendedFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// const ownersEatTooLittle = newDogs
//   .filter(dog => dog.curFood < dog.recommendedFood)
//   .flatMap(dog => dog.owners);
// console.log(ownersEatTooLittle);

// // 4.
// console.log('------- 4 -------');

// // const dogOwners = dog => dog.owners;

// // console.log(
// //   `${ownersEatTooMuch.map(
// //     dogOwners
// //   )}'s dogs eat too much! and ${ownersEatTooLittle.map(
// //     dogOwners
// //   )}'s dogs eat too little!`
// // );
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// // 5.
// console.log('------- 5 -------');

// // newDogs.some(dog => console.log(dog.curFood === dog.recommendedFood));
// console.log(newDogs.some(dog => dog.curFood === dog.recommendedFood));

// // 6.
// console.log('------- 6 -------');

// // newDogs.some(dog => console.log(tooMuch(dog) && tooLittle(dog)));
// const checkEatingOkay = dog =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;

//   console.log(newDogs.some(checkEatingOkay));

// // 7.
// // const { goodDogs } = newDogs.reduce(
// //   (arr, dog) => {
// //     tooMuch(dog) && tooLittle(dog) && arr.goodDogs.push(dog);
// //     return arr;
// //   },
// //   { goodDogs: [] }
// // );

// // console.log(goodDogs);
// console.log(newDogs.filter(checkEatingOkay));

// // 8.
// // const sortDogs = newDogs.map(dog => dog.recommendedFood).sort((a, b) => a - b);
// // console.log(sortDogs);

// const dogsSorted = newDogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood)

// console.log(dogsSorted);