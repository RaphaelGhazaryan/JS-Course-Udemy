// Task
const flatNeighbours = [];
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
function makeItFlat(array) { // [[country1, country2], [country3]]
  // returns [country1, country2, country3]
  
const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
const flatNeighbours = [];
const types = typeof 'listOfNeighbours[1]';
for (let i = 0; i < listOfNeighbours.length; i++) {
    const currentItem = listOfNeighbours[i];
    if (flatNeighbours.includes(types) === false) {
      flatNeighbours.push(currentItem);
    }
  }

  return flatNeighbours;
}

console.log(makeItFlat(flatNeighbours));

// Task 2 


function drawTree(count) {
    for (let star = 0; star <= count; star++){
        let starr = '';
   
        for (let stars = 0 ; stars <=1; stars++){
        starr += "  ";
        };
        for (let starssi = 0; starssi <= star; starssi++) {
            starr += "*";    
        };
        console.log(starr);
    };

};

drawTree(30);


  
