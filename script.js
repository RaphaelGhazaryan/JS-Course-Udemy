'use strict';

let age = 21;
let oldAge = age;
age = 22;
console.log(age, oldAge);

const me = {
  name: 'Raphael',
  age: 21,
};
const friend = me;
friend.age = 24;
console.log(friend, me);
