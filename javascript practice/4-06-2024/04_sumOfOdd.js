//write a javascript program to find odd numbers and  sum of them.

function sumOfOdd (arr){
let sum = 0;
for(let i=0; i<arr.length;i++){
    if(arr[i]%2!==0)
        sum+=arr[i];
}

}

let result = [5,2,3,6,7,10,15,12];
let data = sumOfOdd(result);
console.log("numbers:",data);
console.log("result",data);