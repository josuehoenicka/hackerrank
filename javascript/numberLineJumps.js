// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true

function kangaroo(x1, v1, x2, v2) {
    if((x2 > x1 && v2 >= v1) || v2 == v1){
        return "NO";
    }
    let jump = (x2 - x1) / (v1 - v2);
    if(Number.isInteger(jump) && jump >= 0){
        return "YES";
    } else {
        return "NO";
    }
}

console.log(kangaroo(0, 3, 4, 2)) // YES
