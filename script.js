
bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = []; 

const calcTipp = function(bill){
  return bill >=50 && bill <= 300 ? bill * 0.15: bill * 0.2;
}


for (let rep = 0; rep < bills.length; rep++) {
 const solu =  calcTipp(bills[rep]);
  tips.push (solu);
  totals.push (solu + bills[rep]);
}
console.log(bills, tips, totals);