//write a javascript program to Create a function that takes an integer and returns the factorial of that integer. That is, the integer multiplied by all positive lower integers.

function factorialNum(n) {
    if (n < 0) {
      return "Invalid input: factorial is not defined for negative numbers.";
    }
    
    if (n === 0 || n === 1) {
      return 1;
    }
    
    return n * factorialNum(n - 1);
  }
  
  const inputNumber = -5;
  const resultRecursive = factorialNum(inputNumber);
  console.log(resultRecursive);
  