// for Loop 

// for loop keeps running while condition is  TRUE
for (let rep = 1; rep <= 10; rep++) {    
    console.log(`Lifting weights repetition ${rep}`);  
}

const raphael = [
    'raphael',
    'Ghazaryan',
    2020-1999,
    'student',
    ['Erik','Wasen','Sahel']
];
const types = [];

for(let i = 0; i < raphael.length; i++) {
    // reading from raphael array
    console.log(raphael[i], typeof raphael[i]);

    // filling types array
    // types[i] = typeof raphael[i];
    types.push(typeof raphael[i]);
}

console.log(types);

const years = [1991, 1990, 2120, 2006];
const ages = [];

for(let i = 0; i < years.length; i++) {
   ages.push (2020 - years[i])
}

console.log(ages);

// continue at current value [i]
for (let i = 0; i < raphael.length; i++) {
   if (typeof raphael[i] !== 'string') continue;
   console.log(raphael[i], typeof raphael[i]); 
}
// break at current value [i]
for (let i = 0; i < raphael.length; i++) {
   if (typeof raphael[i] === 'string') break;
   console.log(raphael[i], typeof raphael[i]);
}