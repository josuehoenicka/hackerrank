// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true

// My answer
function hurdleRace(k, height) {
    let getNumber = Math.max(...height);   
    if(k >= getNumber){
      return 0;  
    } else {
        return getNumber - k;
    }
}

// Test
console.log(hurdleRace(4, [1, 6, 3, 5, 2])); // 2