// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

// My answer
function bonAppetit(bill, k, b) {
    let totalBill = 0;
  for (let i = 0; i < bill.length; i++) {
    if (i !== k) {
      totalBill += bill[i];
    }
  }
  const annaBill = totalBill / 2;

  if (annaBill === b) {
    console.log("Bon Appetit");
  } else {
    console.log(b - annaBill);
  }
}

// Test
console.log(bonAppetit([3, 10, 2, 9], 10, 7)) // "Bon Appetit"