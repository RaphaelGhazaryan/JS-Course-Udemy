'use strict';


for (let rep = 0; rep < 100; rep++) {
    const dividableBy5 = Number.isInteger(rep / 5);
    const dividableBy3 = Number.isInteger(rep / 3);
    if (dividableBy3 && dividableBy5){console.log('Fizzbuzz')}

    else if (dividableBy3){console.log('Fizz')}

    else if (dividableBy5){console.log('Buzz')}

    else {console.log(rep)};
    
} 

