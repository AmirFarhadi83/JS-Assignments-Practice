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













