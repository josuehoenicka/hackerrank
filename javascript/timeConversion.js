// You can see the challenge prompt at the following link below:
// https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s) {
  const hour = Number(s.slice(0, 2));
  const minute = Number(s.slice(3, 5));
  const second = Number(s.slice(6, 8));
  const indicator = s.slice(8, 10);
  let hour24 = hour;
  if (indicator === "PM" && hour !== 12) {
    hour24 += 12;
  } else if (indicator === "AM" && hour === 12) {
    hour24 = 0;
  }
  const hourStr = hour24.toString().padStart(2, "0");
  const minuteStr = minute.toString().padStart(2, "0");
  const secondStr = second.toString().padStart(2, "0");
  return `${hourStr}:${minuteStr}:${secondStr}`;
}

console.log(timeConversion("07:05:45PM")); // 19:05:45