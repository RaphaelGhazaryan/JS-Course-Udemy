// looping backwards

const raphael = [
    'Raphael',
    'Ghazaryan',
    2020 - 1999,
    'student',
    ['Wasen','Sahel','Erik'],
];


for(let i = raphael.length - 1; i >= 0; i--) {
    console.log(i,raphael[i]);
}

// loops in loops

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---EXERCISE NR.${exercise}`);

 for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep}`);
     
 }
}