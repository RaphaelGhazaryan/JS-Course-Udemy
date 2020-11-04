/*********************** 
Variables and data types
*/
/*
var firstName = "John"; 
console.log(firstName);
var lastName = "Smith" ;
var age = "28" ; 

var fullAge = true ; 
console.log (fullAge) ; 

var job; 
console.log (job);

job = "teacher" ; 
console.log (job) ; 


//Variable naming rules 
let _3years = 3;
var $function = "10";
var johnMark = "John and Mark" ; 
var if = 23;
*/
/*****************************************************************
 * *************************************************************** 
 * Variable mutation and type coercion
 */
/*
 var firstName = "John" ;
 var age = 28;

 //Type conversion
 const inputYear= "1999";
 console.log (Number(inputYear), inputYear)
 // Type coercion
 console.log (firstName + " " + age);

 var job, isMarried; 
 job = "teacher" ; 
 isMarried = "false"

 console.log (firstName + "is a " + age + 
 " years old " + job + " Is he married ?" + isMarried)

 // Variable mutation 
 age = "twenty eight" ; 
 job = "driver" ; 

 alert(firstName + "is a " + age + 
 " years old " + job + " Is he married ?" + isMarried)

 var lastName = prompt("what is his last Name?");
 console.log (firstName + " " + lastName);



 /*****************************************************************
  * *************************************************************** 
  * Basic Operrators
  */
 /*
 var age = 28
 var year, yearJohn, yearMark ; 
now = 2020
ageJohn =28
ageMark = 33


// Math operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;

console.log (yearJohn);

console.log (now +2);
console.log (now *2);
console.log (now /10);


// Logical operatiors
var johnOlder = ageJohn < ageMark;
console.log(johnOlder) ; 

// typeof operator
console.log (typeof johnOlder);
console.log (typeof ageJohn) ; 
console.log (typeof "Mark is older than John");
var x ; 
console.log (typeof x) ; 


/**************************************************************
 * *************************************************************** 
 * Operator precedence
 

 var now = 2020;
 var yearJohn = 1989 ; 
 var fullAge = 18 ; 

// Multiple operators
 var isFullAge = now -  yearJohn  >= fullAge ; 
 console.log (isFullAge)

// Grouping
 var ageJohn = now - yearJohn ; 
 var ageMark= 35 ; 
 var average = (ageJohn + ageMark) / 2 ;
 console.log(average) ; 

 // Multiple assignments
 var x, y ; 
 x =  y = (3+5)*4-6 ; //8 * 4 - 6// 32-6 // 26
 console.log (x, y);

 // More operators 
 x*= 2 ;
 console.log (x)
 x+=10 ; 
 console.log (x)
 x++ 
 console.log (x);
 */


/**************************************************************** 
 * *************************************************************** 
 //Coding Challenge 1
 var markMass , markHeight , johnMass , johnHeight ;
 markMass = 85 ; markHeight = 1.80 ;
 johnMass = 90 ; johnHeight = 1.85 ; 

 var BMIJ = johnMass / (johnHeight*2) ; 
 var BMIM = markMass / (markHeight*2) ; 
 var BMIHigher = BMIM > BMIJ ;
 console.log ("Is Marks BMI Higher than Johns ?",BMIHigher);
  

 /****************************************************************
  * *************************************************************** 
  *  * If / else Statements
 */
 /*var firstName = "John" ; 
 var civilStatus = "single";

 if (civilStatus === "married" ) {
     console.log ( firstName + " is marrrrried!");
} else {console.log (firstName + " hopefully find a hoe")} ;
var isMarried = true; 

if (isMarried) {console.log (firstName + "geil du hengz")} ; 

var markMass , markHeight , johnMass , johnHeight ;
markMass = 85 ; markHeight = 1.80 ;
 johnMass = 90 ; johnHeight = 1.85 ; 

 var BMIJ = johnMass / (johnHeight*2) ; 
 var BMIM = markMass / (markHeight*2) ; 
 if (BMIM > BMIJ) {console.log ("Mark Bmi is thick bruh")}
 else {console.log ("Mark naht so thick bruhh")} ; 


*************************************************************** 
/*************************************************************** 
 Strings and Template Literals

const firstName = "Rafo";
const job = "Student" ;
const birthYear =1999;
const year = 2020;

const Rafo = "I'm" + firstName + ", a " + (year-birthYear) + "years old"
+ job + "!";
console.log(Rafo)

const rafoNew = `I'm ${firstName} a ${job} im ${year-birthYear} years old`
console.log (rafoNew)

***************************************************************
***************************************************************  
/* If else Statements

var firstName = "John" ; 
var age = 20;

if (age<13) {
    console.log(firstName + " is a boy.");
} else if (age >=13 && age <20 ) { 
    console.log(firstName + " is a teenager.") //Between 13-20
}else if (age >=20 && age <30) {
     console.log(firstName + " is a young man")
 }
 else {console.log(firstName +  " is a man.");} 
 */
/*

*************************************************************** 
*************************************************************** 
 // The Ternary Operator and switch Statements
var firstName = "Rafo" ; 
var age = 21; 

//Ternary Operateor
age >=18 ? console.log(firstName + " drinks beer.")
: console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
 console.log (drink);

/* if (age >=18) {          is the same
     var drink= "beer";
 } else {
     var drink = "juice";
 } 

 *************************************************************** 
 *************************************************************** 
 //Switch Statement
 /*var job = "teacher" ; 
 switch (job) {
     case "teacher":
         console.log (firstName + " teaches kids how to code.")
         break;
         case "Rafo":
         console.log (firstName + " cool guy who is cool");
         break
         default: 
         console.log (firstName+ " does something else");
        
        }


 switch(true) {

case age < 13: console.log(firstName + " is a boy");
break;
case age >=13 && age <20 : console.log(firstName + " is a teenager");
break;
default: console.log (firstName + " is a Man")

 }     
 
 
*************************************************************** 
*************************************************************** 
/* If else Statements

var firstName = "John" ; 
var age = 20;

if (age<13) {
    console.log(firstName + " is a boy.");
} else if (age >=13 && age <20 ) { 
    console.log(firstName + " is a teenager.") //Between 13-20
}else if (age >=20 && age <30) {
     console.log(firstName + " is a young man")
 }
 else {console.log(firstName +  " is a man.");} */ 
 


 /*****************************************************************
  * *************************************************************** 
  *  Truthy and Falsy values and equality operators
  */

  // falsy values: undefined, null, 0 , "", NaN
  // truthy values: NOT falsy values

  /*var height = 23  ; 


  if (height || height === 0  ) {console.log (" variavle is definde");}
  else {console.log (" variable is not definde");}

  // Equality operators    Number/String  23/"23"
  if (height == "23") {
      console.log("The == operator does type coercion!");
  } 


  *************************************************************** 
  *************************************************************** 
 // Coding Challenge 2 
/*
var JG1 = 92;
var JG2 = 120;
var JG3 = 102;
var MG1 = 116;
var MG2 = 94;
var MG3 = 123;
var GG1 = 94;
var GG2 = 1322;
var GG3 = 105;

var JG = JG1+JG2+JG3;
var MG = MG1+MG2+MG3;
var GG = GG1+GG2+GG3;

var JGA = JG/3;
var MGA = MG/3;
var GGA = GG/3;

if (JGA>GGA && JGA>MGA) {
    console.log ("John has a higher score ! John average Score was" + JGA )  ; 
}
else if (MGA>GGA && MGA>GGA) {
    console.log ("Mike won !!")
}
else if (GGA>MGA && GGA>JGA) {
    console.log ("Girl won !! Average score" + GG)
}
else {
    console.log ("Mike has a higher score! Mike average Score was" + MGA ) ; 
} 
*/

//*************************************************************** 
//*************************************************************** 
//The conditional Operator
/*
const age = 18; 
age >=16 ? console.log('I like to drinke wine') : 
console.log("i dirnk water");

const drink = age >= 18 ? "Wine" : "Water" 
console.log(drink);

let drink2; 
if (age >=19) {console.log ("Wine")}
else {console.log("water")}



*************************************************************** 
*************************************************************** 
// Functions 
function calculateAge (birthYear) {
    return 2020 - birthYear;
}
var ageFriend = calculateAge(1996);
var ageRafoDouble = calculateAge(1997);
var ageRafo = calculateAge(1999);
console.log(ageRafo, ageRafoDouble, ageFriend);

function yearsUntilRetirement(year, firstName) 
{
    var age = calculateAge (year);
    var retirement = 65 - age; 
    console.log(firstName + " retires in " + retirement + " years.")
}
*//*
yearsUntilRetirement(1999, "Rafo");
 

*************************************************************** 
*************************************************************** 
//Coding Challenge 4 
const bill = 275 ;
const tip = 
if this is true  bill <=300 && bill >=50 ?
then this  bill * 0.15 :
else bill * 0.2;
let value = bill + tip ;

console.log(`The bill was ${bill }, the tip was ${tip}, and the total value 
was ${value}`)  ; 
*/


