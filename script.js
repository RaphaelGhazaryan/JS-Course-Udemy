// Coding Challenge 3

const raphael = {
    name: 'Raphael Ghazaryan',
    mass: 90,
    height: 1.73,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};

const david = {
    name: 'David Ghazaryan',
    mass: 94,
    height: 1.79,

    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
};
// have to call the function before 
raphael.calcBMI();
david.calcBMI();
console.log(david.bmi,raphael.bmi);
console.log(david.bmi > raphael.bmi ? `${david.Name}`:`${raphael.name}'s BMI (${raphael.bmi}) is higher than `);