// Functions calling other Functions

function cutFruitPieces(fruit) {
    return fruit *4  ; 
}


function fruitProcessor (apples,oranges){

    const applepieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces (oranges);

    const juice = `Juice with ${applepieces} applepieces and ${orangepieces}
    orangespieces`;
    return juice
}
console.log (fruitProcessor (2, 3));