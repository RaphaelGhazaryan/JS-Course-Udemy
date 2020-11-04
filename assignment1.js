/*//LECTURE: Values and Variables
const country ="Germany" ; 
const continent = "Europe";
let population = "81Mill";
console.log("I'm from " +country +  " The country is in " 
+continent + " and has a populations of " + population);

//LECTURE: Data Types
const isIsland = false ;
let none = null ;
let language
console.log (typeof isIsland + typeof language  + typeof population + typeof None)

//LECTURE: Basic Operators
let Germany = 8100 ; 
let HalfGermany = Germany /2 +1;
let Finnland = 1232; 
let description = "Portugal is in Europe, and its 11 milion people speak portuguese" 
console.log (Germany < 330000);
const description = `${country} is in ${continent}, and its
${population} million people speak ${language}`;

//LECTURE: Taking Decisions: if / else Statements
const Germany = 8100;
if (Germany> 3300) {
    console.log (`portugals population is above average`)
}
else {`Portugals population is 22 million below average`};


//LECTURE: Equality Operators: == vs. ===
let numNeighbours = Number(
prompt('How many neighbour countries does your country have?'));

if(numNeighbours === 1) {console.log ('Only 1 Border')}
else if(numNeighbours > 1) {console.log ('More than 1border')}
else {console.log ('no borders')}


//LECTURE: Logical Operators
let country = "Germany"
let language = "english"
let population = "49"
let isIsland = false


if (language === 'english' && population < 50 && !isIsland)
{
console.log(`You should live in ${country} :)`);
} else {
console.log(`${country} does not meet your criteria :(`);
} 


//LECTURE: The switch Statement
let language = prompt("What langugae do you mainly speak");

switch (language) {
    case 'mandarin':
    case 'chinese':console.log(`MOSt number of native speakers`)   
        break;
    case 'spanish':console.log(`2nd place in number of native speakers`)
        break
    case 'english':console.log(`3rd place`)
    default:console.log(`Great language too`)
        break;
}


//LECTURE: The Conditional (Ternary) Operator
population = 22
console.log (`Germany population is ${population <= 33 ? "below" : "above"} average`)
*/
