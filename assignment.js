const myCountry = {
    country: 'Germany',
    capital: 'Berlin',
    language: 'German',
    population: '82000000',
    neighbours: ['Poland','Netherland','France','Tsech']
};

console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} people,
${myCountry.neighbours.length} neigbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);