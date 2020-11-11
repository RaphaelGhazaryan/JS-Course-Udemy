
const calcTip = billValue => {
    const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
    return tip;
}
//need it once
console.log(calcTip(100));

//need it more than once
const result = calcTip(100); 
console.log(result);


//shorter version
const calcTipp = billValue => billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
console.log(calcTipp(100));