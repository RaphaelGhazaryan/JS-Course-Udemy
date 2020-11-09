// LECTURE: Basic Array Operations

const neighbours = ['Österreich','Frankreich','Polen','Spanien'] ; 

neighbours.push ('Rafoland') ;
console.log (neighbours) ; 

neighbours.pop(); 
console.log(neighbours);

if (!neighbours.includes('germany')) 
{
console.log('Probaly not next to Germany')
}

neighbours[neighbours.indexOf('Spanien')] = 'Republic of Sweden';
 console.log(neighbours);