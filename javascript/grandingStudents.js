// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

function gradingStudents(grades) {
    var roundedGrades = [];
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] < 38 || grades[i] % 5 < 3) {
        roundedGrades.push(grades[i]);
        } else {
        var nextMultipleOf5 = Math.ceil(grades[i] / 5) * 5;
        roundedGrades.push(nextMultipleOf5);
        }
    }
    return roundedGrades;
}
  
  
  
  
  
