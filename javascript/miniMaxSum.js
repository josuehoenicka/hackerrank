// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true

// My answer
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