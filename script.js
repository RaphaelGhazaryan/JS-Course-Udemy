// Object Methods

const raphael = {
    firstName: 'Raphael',
    lastName: 'Ghazaryan',
    birthYear: '1999',
    job: 'student',
    friends: ['Wasen', 'Sahel', 'Erik'],
    hasDriversLicense: true,

   /* calcAge: function(birthYear) {
       return 2020 - birthYear;
    } */

     // this keyword
   /* calcAge: function() {
        return 2020 - this.birthYear;
    } */
       

    calcAge: function() {
        this.age = 2020 - this.birthYear;
        return this.age;
    },
    
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old student and ${this.hasDriversLicense?`has a driver's license`:`has not a driver's license`}`
    }

};

// We can call the function with Bracket and Dots because its a ObjectProperty
console.log(raphael.calcAge());
console.log(raphael.age);
console.log(raphael.age);
console.log(raphael.getSummary());
console.log(raphael['calcAge']());


// Challenge 
// 'Raphael is a 21-year old student, and he has a driver's licencse'

