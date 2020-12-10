'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understand the problem
// What is temp amplitude=
// difference between highest and lowest temp
// How to compute max and min temperatures
// What is a sensore error? And what to do ?

// 2)Subproblems
// How to ignore errors?
// Find max value
// Find min value
// Subtract min from max and return it

const calcTempAmplutdude = (temps) => {
  let max = temps[0];
  let min = temps[0];
  for (let repetition = 0; repetition < temps.length; repetition++) {
    const currTemp = temps[repetition];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  console.log(max);
  console.log(min);
  return max - min;
};
const amplitude = calcTempAmplutdude(temperatures);
console.log(amplitude);

//Function now should receive 2 arrays of temps

//With 2 array, we should just merge them
const temps3 = [-10, 7, 12, 99];
const temps2 = [1, 6, 3, 9];

const calcTempAmplutdudeNew = (t1, t2) => {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let repetition = 0; repetition < temps.length; repetition++) {
    const currTemp = temps[repetition];
    if (typeof currTemp !== 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }

  console.log(max);
  console.log(min);
  return max - min;
};
const amplitudeN = calcTempAmplutdudeNew(temps2, temps3);
console.log(amplitudeN);

// Debugging

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celcius:')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
