// Write a javascript program to calculate simple interest based on the principle amount

function simpleInt(principle, rate, time) {
    var finalAmt=principle + principle*time*rate;
    return finalAmt; 
  }
  
  console.log(simpleInt(20000,5,2)) 
  console.log(simpleInt(150000,25,1)) 