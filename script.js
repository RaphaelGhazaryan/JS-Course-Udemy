//Basic Array Operations

const friends = ['Michael', 'Steven', 'Peter'];

//Add Elements
const newLength = friends.push('Rafo'); 

console.log(friends, newLength); 

friends.unshift('Sahel'); 
console.log(friends)

//Remove Elements
friends.pop ();
const popped = friends.pop(); //Last
console.log(friends, popped)

friends.shift(); //First
console.log(friends); 


console.log(friends.indexOf('Steven')); 
console.log(friends.indexOf('Rafo')); 

console.log(friends.includes('Steven'));
console.log(friends.includes('Rafo'));

if(friends.includes('Steven')){
    console.log('You have a friend called Peti')
}