  
// LECTURE: Basic Array Operations

const neighbours = ['Österreich','Frankreich','Polen','Spanien'] ; 

neighbours.push ('Rafoland') ;
console.log (neighbours) ; 

neighbours.pop(); 
console.log(neighbours);
//if not including gemrany
if (!neighbours.includes('germany')) 
{
console.log('Probbaly not next to Germany')
}
//changing a Name
neighbours[neighbours.indexOf('Spanien')] = 'Republic of Sweden';
 console.log(neighbours);