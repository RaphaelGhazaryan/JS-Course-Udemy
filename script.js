//FunctionReview

const calcage = function (birthYear) { 
    return 2020 - birthYear;
    
}

const yearsUntilRetirement = function (birthYear,firstName)  {
    const age = calcage (birthYear) ; 
    const retirement = 65 - age ; 

if (retirement >= 0) {
    console.log(`${firstName} retires in ${retirement}years`);
    return retirement;    
}   else {
    console.log(`${firstName} has already retired`);
    return -1;  
}


}

console.log(yearsUntilRetirement (1999, 'Raphael'));
console.log(yearsUntilRetirement (1950, 'Raphaelo'))



Fu