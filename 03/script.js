`use strict`

// // T1 //

// function describeCountry(country,population,capitalCity) {
//     return `The country ${country} has a population of ${population} million people and its capital city is ${capitalCity}.`;
// }
// const data1=describeCountry("USA",325,"Washington D.C.")
// console.log(data1);

// const data2=describeCountry('iran',85,'tehran')
// console.log(data2);

// const data3=describeCountry('russia',130,'moscow')
// console.log(data3);

// ///////


// // T2 //

// function percentageOfWorld1(worldPopulation, countryPopulation){
//     return (countryPopulation / worldPopulation ) * 100;
// }

// const percentageOfWorld2=function   (worldPopulation, countryPopulation){
//     return (countryPopulation / worldPopulation ) * 100;
// }

// const percent1 = percentageOfWorld2(7900,1441)
// console.log(percent1)
// const percent2 = percentageOfWorld2(7900,144)
// console.log(percent2)
// const percent3 = percentageOfWorld2(7900,14)
// console.log(percent3)

// /////////



// // T3 //

// function percentageOfWorld1(worldPopulation, countryPopulation) {
//     return (countryPopulation / worldPopulation) * 100;
// }

// const percentageOfWorld2 = function (worldPopulation, countryPopulation) {
//     return (countryPopulation / worldPopulation) * 100;
// }

// const percentageOfWorld3 = (worldPopulation, countryPopulation) => {
//     return (countryPopulation / worldPopulation) * 100;
// }

// const percent1 = percentageOfWorld3(7900, 1441)
// console.log(percent1)
// const percent2 = percentageOfWorld3(7900, 144)
// console.log(percent2)
// const percent3 = percentageOfWorld3(7900, 14)
// console.log(percent3)

// /////////







// // T4 //


// const percentageOfWorld3 = (countryPopulation) => {
//     return (countryPopulation / 7900) * 100;
// }

// const describePopulation = (country, countryPopulation) => {
//     const percentAge = percentageOfWorld3(countryPopulation);
//     const description = `${country} has ${countryPopulation} million people,
//     which is about ${percentAge} of the world`;
//     console.log(description)
// }

// const percent1 = describePopulation('china', 1441);
// const percent2 = describePopulation('russia', 144);
// const percent3 = describePopulation('emirate', 14);

// /////////






// ///// ch1 /////
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // // Data 1
// // const avgDolphins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// // Data 2
// const scoreDolphins = calcAverage(85, 54, 71);
// const scoreKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//     } else {
//         return `no winner`
//     }
// }
// console.log(checkWinner(scoreDolphins, scoreKoalas))

// ////////////


// //// T5 ////

// const populations = [1441, 342, 85, 130];
// console.log(populations.length === 4 ? true : false)


// const percentageOfWorld3 = (countryPopulation) => {
//     return (countryPopulation / 7900) * 100;
// }

// const percentAges = [
//     percentageOfWorld3(populations[0]), percentageOfWorld3(populations[1]), percentageOfWorld3(populations[2]), percentageOfWorld3(populations[
//         populations.length - 1])]

// console.log(percentAges)

// // /////////






// //// T6 ////

// const neighbors = ['armenia', 'turkey', 'iraq', 'pakistan']
// console.log(neighbors)

// neighbors.push('Utopia')
// console.log(neighbors)

// neighbors.pop()
// console.log(neighbors)

// if(!neighbors.includes('germany')){
//     console.log(`'neighbors' array does not include the country ‘Germany’`)
// }

// console.log(neighbors.indexOf('iraq'))

// neighbors[2]='country of saddam yazid kaafar'
// console.log(neighbors)

// ////////





// //// ch2 ////

// const calcTip = function (tip) {
//     return tip >= 50 && tip <= 300 ? tip * 0.15 : tip * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2])];
// console.log(tips);

// const total = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]];
// console.log(total);
// ////////////






// //// T7 ////
// const myCountry = {
//     country: 'iran',
//     capital: 'tehran',
//     language: 'farsi',
//     population: 85,
//     neighbors: ['armenia', 'turkey', 'iraq', 'pakistan']
// }
// console.log(myCountry);
// //////////


// /// mini ch ///
// const myCountry = {
//     country: 'iran',
//     capital: 'tehran',
//     language: 'farsi',
//     population: 85,
//     neighbors: ['armenia', 'turkey', 'iraq', 'pakistan']
// }

// console.log(`${myCountry.country} has ${myCountry.neighbors.length} neighbors, and the best neighbor is ${myCountry.neighbors[0]}`)
// /////////////





// /// T8 ///
// const myCountry = {
//     country: 'iran',
//     capital: 'tehran',
//     language: 'farsi',
//     population: 85,
//     neighbors: ['armenia', 'turkey', 'iraq', 'pakistan']
// }
// myCountry.population = myCountry.population + 2;
// myCountry['population'] = myCountry['population'] - 2;

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`);

// /////////////





/// mini ch2 ///

// const amir = {
//     firstName: 'amir',
//     lastName: 'farhadi',
//     job: 'developer',
//     birthYear: 2004,
//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         return this.age;
//     },
//     hasDriverLicense: false,
//     getSummery: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has${this.hasDriverLicense ? ' a' : "'nt"} driver license`
//     }
// }
// console.log(amir.getSummery())


// /// T9 ///

// const myCountry = {
//     country: 'iran',
//     capital: 'tehran',
//     language: 'farsi',
//     population: 85,
//     neighbors: ['armenia', 'turkey', 'iraq', 'pakistan'],
//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`
//     },
//     checkIsland: function () {
//         this.isIsland = this.neighbors.length === 0 ? true : false;
//         return this.isIsland;
//     }
// }
// console.log(myCountry.describe())
// console.log(myCountry.checkIsland())

// /////////////


// //// ch3 ////

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = (this.mass) / (this.height ** 2);
//         return this.BMI;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = (this.mass) / (this.height ** 2);
//         return this.BMI;
//     }
// }
// console.log(`${mark.calcBMI() > john.calcBMI() ? `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName} (${john.BMI})` : `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName} (${mark.BMI})`}`)

// //////////////



// //// T10 ////

// for (i=1;i<=50;i++){
//     console.log(`Voter number ${i} is currently voting`)
// }

// ////////





// //// T11 ////

// const populations = [1441, 342, 85, 130];

// const percentageOfWorld3 = (a) => {
//     return (a / 7900) * 100;
// }
// const percentAges2 = [];

// for (let i = 0; i < populations.length; i++) {
//     percentAges2.push(percentageOfWorld3(populations[i]));
// }

// console.log(percentAges2)

// // /////////





// //// T12 ////

// const listOfNeighbors = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia']]
// for (let i = 0; i < listOfNeighbors.length; i++) {
//     for(y=0;y<listOfNeighbors[i].length;y++){
//         console.log(`neighbor: ${listOfNeighbors[i][y]}`)
//     }
// }

// //////////



// //// T13 ////

// const populations = [1441, 342, 85, 130];

// const percentageOfWorld3 = (a) => {
//     return (a / 7900) * 100;
// }
// const percentAges3 = [];

// let i = 0
// while (i < populations.length) {
//     percentAges3.push(percentageOfWorld3(populations[i]));
//     i++
// }

// console.log(percentAges3)

// // /////////
