// LECTURE: INtroduction to Arrays 
const poopulation = [4100 , 1200 , 1230 , 1400] ; 
//checking if its 4 values  true / false ?
 console.log (poopulation.length===4)

function precentage0fWorld1 (population){
    return (population /7900) *100
}
//putting array in function so its easy to log in console
const percentages = [
precentage0fWorld1 (poopulation[1]),
precentage0fWorld1 (poopulation[2]),
precentage0fWorld1 (poopulation[3]),
precentage0fWorld1 (poopulation[0])]

console.log(percentages);