'use strict';
// create "...12°C in 1 days...5°C in 2 days...-5°C in 3 days...0°C in 4 days...4°C in 5 days..."

// Coding Challenge 5
const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let rep = 0; rep < arr.length; rep++) {
    str = str + `${arr[rep]}°C in ${rep + 1} days...`;
  }
  console.log('...' + str);
};
console.log(printForecast(temp2));
