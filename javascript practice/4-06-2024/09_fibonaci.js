// wriye a javascript program to find fibonaci series.

function printNumberPattern(rows) {
    let num = 1;
    
    for (let i = 1; i <= rows; i++) {
        let rowOutput = "";
        
        for (let j = 1; j <= i; j++) {
            rowOutput += num + " ";
            num++;
        }
        
        console.log(rowOutput.trim());
    }
}

// Example usage:
printNumberPattern(5);
