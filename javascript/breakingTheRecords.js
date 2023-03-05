// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

// My answer 
function breakingRecords(scores) {
    let most = scores[0];
    let least = scores[0];
    let mostPoint = 0;
    let leastPoint = 0;
    for(let i = 1; i < scores.length; i++){
        if(scores[i] > most) {
            most = scores[i];
            mostPoint++
        } else if (scores[i] < least) {
            least = scores[i];
            leastPoint++;
        }
    }
    return [mostPoint, leastPoint];
}

// Test
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // 2 4
