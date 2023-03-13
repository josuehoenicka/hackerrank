// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    const applePositions = apples.map((apple) => a + apple);
    const orangePositions = oranges.map((orange) => b + orange);
    appleCount = applePositions.filter((position) => position >= s && position <= t).length;
    orangeCount = orangePositions.filter((position) => position >= s && position <= t).length;
    console.log(appleCount + '\n' + orangeCount);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])); // 1 1
  