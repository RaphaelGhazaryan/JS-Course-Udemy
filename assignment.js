//Lecture: Arrow Functions
const percenstage0fWorld3 = (Population, Country) => {
    const Maths = Population / 7900 ;
    const Percentage = Maths * 100 ; 
    return ` ${Country} has ${Population} million people, so it's about ${Percentage}% of
    the world population`

}
console.log (percenstage0fWorld3(1441, "China"))

// other possibilty 
const percentageOfWorld3 = population => (population / 7900)
 * 100;
 const percPortugal3 = percentageOfWorld3(10);
 const percChina3 = percentageOfWorld3(1441);
 const percUSA3 = percentageOfWorld3(332);
 console.log(percPortugal3, percChina3, percUSA3);
