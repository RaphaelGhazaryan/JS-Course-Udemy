//Arrays (Data Structure)

const friend = 'Erik';
const friend1 = 'Sahel';
const friend2 = 'Wasen';

const friends = ['Erik', 'Sahel', 'Wasen']
console.log (friends); 

const yearss = new Array(1999, 1998, 2004, 2020);

console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Neuer Freund';
console.log(friends);
//friends = ['ksad', 'asd']
const birthYear = 1999
const Raphael = ['Raphael', 'Ghazaryan', '2020'- birthYear , 'Student', friends];
console.log (Raphael); 

//Exercise
const calcAge = function (birthYear){
    return 2020-birthYear;
}
const years = [1990, 1967, 2002 , 2010 , 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge (years[1]),
calcAge (years[years.length-1])];
console.log (ages);