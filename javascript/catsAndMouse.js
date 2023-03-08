// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true

function catAndMouse(x, y, z) {
    let catA = Math.abs(x - z);
    let catB = Math.abs(y - z);
    if(catA < catB){
        return "Cat A";
    } else if(catB < catA){
        return "Cat B";
    } else {
        return "Mouse C";
    }
}

console.log(catAndMouse(1, 2, 3)); // "Cat B"