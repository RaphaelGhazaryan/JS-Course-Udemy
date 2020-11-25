function percentageOfWorld1(population) {
    return (population / 7900) * 100;
    }
   
const populations = [10, 1441, 332, 83];


 const percentages2 = [];
 for (let i = 0; i < populations.length; i++) {
 const perc = percentageOfWorld1(populations[i]);
 percentages2.push(perc);
 }
 console.log(percentages2);


 // ===> into a while loop 
 const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
 }
 console.log(percentages3); 
 