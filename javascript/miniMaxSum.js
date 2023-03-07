// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

// My answer (15/15 test)
function miniMaxSum(arr) {
    arr.sort((a, b) => a - b);
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const minSum = sum - arr[arr.length - 1];
    const maxSum = sum - arr[0];
    console.log(minSum, maxSum);
}
  
// My answer (14/15 test) 
function miniMaxSum(arr) {
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let resultMin = 0;
    let resultMax = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== maxNum){
            resultMin += arr[i];
        } if(arr[i] !== minNum){
            resultMax += arr[i];
        }
    }
    console.log(resultMin, resultMax);
}

// Test
miniMaxSum([1, 2, 3, 4, 5]) // 10 14