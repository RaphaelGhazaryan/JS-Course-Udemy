//Objects Dot Notation / Bracket Notation


//object
const raphael = {
    firstName: 'Raphael', 
    lastName: 'Ghazaryan',
    age: 2020-1999,
    job: 'Student',
    friends: ['Sahel','Erik', 'Wasen']
};

//how to retrieve a property from objects
console.log(raphael.lastName);
console.log(raphael['lastName']);

const nameKey = 'Name'; 
console.log(raphael['first'  + nameKey]);
console.log(raphael['last'  + nameKey]);

//prompt + bracket notation (dot notation doesn't work here)
const interestedIn = prompt('What do you want to know about Raphael Choose between firstName, lastName, age, job, friends')
console.log(raphael[interestedIn]);

if(raphael[interestedIn]){
console.log(raphael[interestedIn])
}else{
    console.log('Wrong request!Choose between firstName, lastName, age, job, friends' )
}

//adding to properties to object raphael
raphael.location = 'Germany';
raphael['hairColor'] = 'black';


//challenge
//"Raphael has 3 friends, and hist best friend is called Erik"
console.log(`${raphael.firstName} has ${raphael.friends.length} friends, and his best friend is called ${raphael.friends[1]}`)

