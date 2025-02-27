const distance = 1500;
const costPerAve = 3;
const budget = 175;

let speed1 = 55;
let miles1 = 30;

let timeCalculations1 = distance / miles1;
let milesCalculations1 = distance / speed1;
let totalCost1 = costPerAve * timeCalculations1;

console.log(timeCalculations1, milesCalculations1, totalCost1);

if (totalCost1 <= budget) {
  console.log(`Our Budget will be ${totalCost1}.Lets Go!!`);
} else {
  console.log(
    `Our Budget will be ${totalCost1}.INSUFFICIENT BUDGET ❌❌❌😒😒😒!!`
  );
}

let speed2 = 60;
let miles2 = 28;

let timeCalculations2 = distance / miles2;
let milesCalculations2 = distance / speed2;
let totalCost2 = costPerAve * timeCalculations2;

console.log(timeCalculations2, milesCalculations2, totalCost2);
if (totalCost2 <= budget) {
  console.log(`Our Budget will be ${totalCost2}.Lets Go!!`);
} else {
  console.log(
    `Our Budget will be ${totalCost1}.INSUFFICIENT BUDGET ❌❌❌😒😒😒!!`
  );
}

let speed3 = 75;
let miles3 = 23;

let timeCalculations3 = distance / miles3;
let milesCalculations3 = distance / speed3;
let totalCost3 = costPerAve * timeCalculations3;

console.log(timeCalculations3, milesCalculations3, totalCost3);
if (totalCost3 <= budget) {
  console.log(`Our Budget will be ${totalCost3}.Lets Go!!`);
} else {
  console.log(
    `Our Budget will be ${totalCost1}.INSUFFICIENT BUDGET ❌❌❌😒😒😒!!`
  );
}

////// Which one well be the best
if (budget >= totalCost1 && budget >= totalCost2 && budget < totalCost3) {
  console.log(`${totalCost3} will be the best budget and time friendly!!`);
} else if (budget >= totalCost1 && budget < totalCost2) {
  console.log(
    `${totalCost2} & ${totalCost1} is not budget friendly! So impossible to go now!`
  );
} else {
  console.log("No return");
}


//With Function Solution
// const totalDistance = 1500;
// const averageCost = 3;
// const budget = 175;

// function math1(miles, gallon) {
//   let milesCalculation = totalDistance / gallon;
//   let timeCalculation = totalDistance / miles;
//   let totalCost = averageCost * milesCalculation;
//   console.log(milesCalculation, timeCalculation);
//   if (totalCost > budget) {
//     let extra = budget - totalCost;
//     console.log(
//       `The amount required for the journey is ${totalCost} and the total hours needed for driving is ${timeCalculation}. That isn't cost-effective.❌❌❌ Impossible`
//     );
//   } else {
//     console.log(
//       `The amount required for the journey is ${totalCost} and the total hours needed for driving is ${timeCalculation}.Lets Go!😁😁!!!`
//     );
//   }
// }
// math1(75, 23);
