// let js="amazing";

// const mamadName='ali';
// console.log(mamadName);


// ///////// T1 ////////
// const country='iran'
// const continent='asia'
// const population=10
// console.log(country)
// console.log(continent)
// console.log(population)


// // ///////////////////////////
// console.log(typeof null)

// ///////////T2///////////
// const country = 'iran'
// const continent = 'asia'
// const population = 10
// const isIsland = false
// let language;
// console.log(country)
// console.log(continent)
// console.log(population)
// console.log(isIsland);
// console.log(language);
// /////////////////////////


// ///////////T3///////////
// const country = 'iran';
// const continent = 'asia';
// let population = 10;
// const isIsland = false;
// const language = 'farsi';
// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);
// /////////////////////////



// /////// T4 ////////
// const country = 'iran';
// const continent = 'asia';
// let population = 80;
// const isIsland = false;
// const language = 'farsi';
// let half=population/2;
// let finlandPopulation=6;
// let average=33;
// const description= country+' is in '+continent+', and its '+population+' million people speak '+language
// console.log(half);
// console.log(++population);
// console.log(population>finlandPopulation);
// console.log(population<average);
// console.log(description);
// /////////////////////////


// /////////// ch1 ///////////
// let markWeight = 78;
// let markTall = 1.69;
// let johnWeight = 92;
// let johnTall = 1.95;

// let information = 'Marks weights ' + markWeight + ' kg and is ' + markTall + ' m tall. John weights ' + johnWeight + ' kg and is ' + johnTall + ' m tall.';
// console.log(information);
// let markBMI = markWeight / markTall ** 2;
// let johnBMI = johnWeight / johnTall ** 2;
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// markWeight = 95;
// markTall = 1.88;
// johnWeight = 85;
// johnTall = 1.76;

// information = 'Marks weights ' + markWeight + 'kg and is ' + markTall + ' m tall. John weights ' + johnWeight + ' kg and is ' + johnTall + ' m tall.';
// console.log(information);
// markBMI = markWeight / markTall ** 2;
// johnBMI = johnWeight / johnTall ** 2;
// markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// /////////////////////////



// /////// T5 ////////
// const country = 'iran';
// const continent = 'asia';
// let population = 80;
// const language = 'farsi';
// const description= `${country} is in ${continent}, and its ${population} million people speak ${language}`
// console.log(description);
// /////////////////////


// /////// T6 ////////
// const country = 'iran';
// let population = 80;
// if (population > 33) {
//     console.log(`${country}'s population is above average`)
// } else {
//     console.log(`${country}'s population is ${33 - population} million below average`)
// }
// /////////////////////


// /////////// ch2 ///////////
// // const markWeight = 78;
// // const markTall = 1.69;
// // const johnWeight = 92;
// // const johnTall = 1.95;

// const markWeight = 95;
// const markTall = 1.88;
// const johnWeight = 85;
// const johnTall = 1.76;

// const markBMI = markWeight / markTall ** 2;
// const johnBMI = johnWeight / johnTall ** 2;

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`)
// }
// /////////////////////////


// /////////// T7 //////////

// // 4
// // '617'
// // 23
// // false
// // 1143

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

// ////////////////////////


// ///////// T8 ////////
// const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));
// if (numNeighbors === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbors > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }
// /////////////////////

// /////// T9 ////////
// const country = 'iran';
// const continent = 'asia';
// let population = 40;
// const language = 'english';
// const isIsland = false;
// if (language === 'english' && population < 50 && !isIsland) {
//     console.log(`You should live in ${country} :)`)
// } else {
//     console.log(`${country} does not meet your criteria :(`)
// }
// /////////////////////


// ///////// ch3 /////////

// // Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// // Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// // Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// // const dolphinsTotalScore = (96 + 108 + 89) / 3;
// // const KoalasTotalScore = (88 + 91 + 110) / 3;

// // console.log(dolphinsTotalScore, KoalasTotalScore);
// // if (dolphinsTotalScore > KoalasTotalScore) {
// //     console.log(`dolphins win`);
// // } else if (KoalasTotalScore > dolphinsTotalScore) {
// //     console.log(`koalas win`);
// // } else {
// //     console.log(`we need draw`);
// // }

// const dolphinsTotalScore = (97 + 112 + 101) / 3;
// const KoalasTotalScore = (109 + 95 + 123) / 3;
// const isMinDolphins = dolphinsTotalScore >= 100;
// const isMinKoalas = KoalasTotalScore >= 100;

// console.log(dolphinsTotalScore, KoalasTotalScore);
// if (dolphinsTotalScore > KoalasTotalScore && isMinDolphins) {
//     console.log(`dolphins win`);
// } else if (dolphinsTotalScore > KoalasTotalScore && !isMinDolphins) {
//     console.log(`there is no winner`);
// } else if (KoalasTotalScore > dolphinsTotalScore && isMinKoalas) {
//     console.log(`koalas win`);
// } else if (KoalasTotalScore > dolphinsTotalScore && !isMinKoalas) {
//     console.log(`there is no winner`);
// } else if (KoalasTotalScore === dolphinsTotalScore && isMinDolphins && isMinKoalas) {
//     console.log(`we need draw`);
// } else {
//     console.log(`there is no winner`);
// }

// /////////////////////



// ///////// mini T ////////
// const day = 'monday';

// if (day === 'monday') {
//     console.log(1);
// } else if (day === 'tuesday') {
//     console.log(2);
// } else if (day === 'wednesday') {
//     console.log(3);
// } else if (day === 'thursday') {
//     console.log(4);
// } else if (day === 'friday') {
//     console.log(5);
// } else if (day === 'saturday') {
//     console.log(6);
// } else if (day === 'sunday') {
//     console.log(7);
// } else {
//     console.log(8);
// }
// /////////////////////



// ////////////// T10 //////////
// const language = 'english';

// switch (language) {
//     case 'chinese' || 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too :D');
// }
// ///////////////////////////



// ////////////// T11 //////////

// const country = 'iran';
// let population = 130;
// console.log(`${country}'s population is ${population>33 ? 'above': 'below'} average`);

// /////////////////////


//////////// ch4 //////////

// const bill = Number(prompt('entry bill'));
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);