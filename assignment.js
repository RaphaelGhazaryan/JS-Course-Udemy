const myCountry = {
    country: 'Germany',
    capital: 'Berlin',
    language: 'German',
    population: '82000000',
    neighbours: ['Poland','Netherland','France','Tsech']
};
myCountry.population = '84000000';
myCountry['population'] = '82000000';
console.log(`${myCountry.country} has ${myCountry.population} ${myCountry.language} people,
${myCountry.neighbours.length} neigbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population = '84000000';
myCountry['population'] = '82000000';