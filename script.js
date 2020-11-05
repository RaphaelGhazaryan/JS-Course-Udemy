//Coding Challenge 1
//Calculating the average score of a Basketball Team using ArrowFunctions

// 1 Value
const calccAverage = (a, b, c) => (a + b +c)/3 ;
console.log (calccAverage(4,3,2));

const scoreKoalas= calccAverage(65, 54,49);
const scoreDolphins= calccAverage (23,34,27);
console.log (scoreDolphins,scoreKoalas)


// 2 Values
const calcAverage  = (a, b, c) => {
  const Average =  (a +  b + c) /3 ;
return `The average score of the team is ${Average}`;
}
console.log (calcAverage(65,54,49));
console.log (calcAverage(23,34,27));


//
function checkWinner (avgDolphins , avgKoalas) {

    if (avgDolphins>=2*avgKoalas) {  
    console.log (`The Koalas won ${avgDolphins}:${avgKoalas}`) }
   else if (avgKoalas>=2*avgDolphins) {  
    console.log (`The Dolphins won ${avgDolphins}:${avgKoalas}`) }
else {console.log ('No team wins.. :(')}}

checkWinner(scoreDolphins, scoreKoalas);