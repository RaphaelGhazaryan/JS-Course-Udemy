
const myCountry = {
    country: 'Germany',
    capital: 'Berlin',
    language: 'German',
    population: '82000000',
    neighbours: ['Poland','Netherland','France','Tsech'],
    
    describe: function () {
        console.log(
        `${this.country} has ${this.population} million
        ${this.language}-speaking people,
        ${this.neighbours.length} neighbouring countries and a
        capital called ${this.capital}.`
        );
        },


        checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true :
        false;
        // Even simpler version (see why this works...)
        // this.isIsland = !Boolean(this.neighbours.length);

        }
        };

        myCountry.describe();
        myCountry.checkIsland();
        console.log(myCountry);
        
       