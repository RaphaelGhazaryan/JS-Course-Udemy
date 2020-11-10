//Arrow Function Cool

const calcAge = birthYear => 2020 - birthYear; 
const age = calcAge (1999); 
console.log (age);

const yearsUntilRetirement = (birthyear,firstName) => {
    const age = 2020- birthyear;
    const retirment = 65 - age ; 
    //return retirment;
    return `${firstName} retires in ${retirment} years`
}

console.log(yearsUntilRetirement (1999, "Raphael")); 
console.log(yearsUntilRetirement (1999, "Raphael")); 
console.log(yearsUntilRetirement (1999, "Raphael")); 

