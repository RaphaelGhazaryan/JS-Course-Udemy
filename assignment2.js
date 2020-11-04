//Assignments
/*
//LECTURE: Functions 

function describeCountry (country, population, capitalCity) {
    const states = `${country} has a population of 
    ${population} and its capital city is ${capitalCity}`;
    return states
}

const Germany = describeCountry ('Germany', '83 million', 'Berlin');
console.log (Germany)

const Armenia = describeCountry ('Armenia', '3 Million', 'Yerevan' );
console.log (Armenia)

const Finland = describeCountry('Finland', '6 Million','Helsinki');
console.log (Finland)

console.log (Armenia,  Germany, Finland)

*/

//LECTURE: Function Declarations vs. Expressions

function precentage0fWorld1 (population){
    return (population /7900) *100  ; 
}


const precentage0fWorld2 = function (population) {
    return  (population /7900) *100 ; 
}
const ChinaPopulation =  precentage0fWorld1 (1441) 


console.log (ChinaPopulation)