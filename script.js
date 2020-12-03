const calcTip = (billValue) => {
  const tip =
    billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  return tip;
};
//need it once
console.log(calcTip(100));

//need it more than once
const result = calcTip(100);
console.log(result);

//shorter version
const calcTipp = (billValue) =>
  billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(calcTipp(100));

//calculating tips from arrays
const bills = [125, 555, 44];
const tips = [calcTip(125), calcTip(555), calcTip(44)];
console.log(tips);

//tip with bill value in arrays
const total = [125 + calcTip(125), 555 + calcTip(555), 44 + calcTip(44)];
console.log(total);
