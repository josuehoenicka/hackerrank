// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

// My answer
function birthdayCakeCandles(candles) {
    let bigNumber = Math.max(...candles);
    let quantityBigNumber = 0;
    for(let i = 0; i < candles.length; i++){
        if(candles[i] === bigNumber){
            quantityBigNumber++;
        }
    }
    return quantityBigNumber;
}

// Test
birthdayCakeCandles([3, 2, 1 , 3]) // 2