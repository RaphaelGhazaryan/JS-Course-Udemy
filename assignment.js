// Assigment Functions calling other Functions

function precentage0fWorld1 (population){
    return (population /7900) *100  ; 
}




function descripePopulation(country , population) {
    const percentage = precentage0fWorld1(population) ;
    const description=`${country} has ${population} million people,
    which is about ${percentage}% of the world.`;
    console.log (description)
}

descripePopulation ('China', 1441) ; 
descripePopulation ('Armena',3 )