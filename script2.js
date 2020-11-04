'use strict';

let hasDriversLicense = false ; 
const passTest = true ;

if (passTest) hasDriversLicense = true; 
if (hasDriversLicense) console.log ('I can drive');

//const interface = 'Audio'; 
//const private = 534; 
//const if = 23;



//Functions 

function logger () {
console.log('My name is Raphael');
}

// using the function --> calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice =  `Juice with ${apples} apples and 
    ${oranges} oranges.`;
    return juice; 
}

const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor (2, 4);
console.log(appleOrangeJuice);

const num  = Number ('23');




//Function declaration 
function calcAge1 (birthYear){; 
    return  2020 - birthYear;
}

const age1 =  calcAge1 (1999); 
console.log (age1); 


//Function expression
const calcAge2 =  function (birthYear) {
    return  2020 - birthYear;
}
const age2 = calcAge2 (1999);
console.log (age1, age2) ; 


