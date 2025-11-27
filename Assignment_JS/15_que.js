// L2 - Countdown Timer in Node.js

let remaining = 10; // set the starting seconds here

console.log(`Starting countdown from ${remaining}s`);
console.log('Press "s" then Enter to stop early.');

// countdown with setInterval
const timerId = setInterval(() => {
  console.log(`Time left: ${remaining}s`);
  remaining--;

  if (remaining < 0) {
    clearInterval(timerId);
    console.log("Countdown Complete!");
    process.exit(0);
  }
}, 1000);

// delayed user-input check with setTimeout + stdin
setTimeout(() => {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");

  process.stdin.on("data", (data) => {
    const value = data.trim().toLowerCase();
    if (value === "s") {
      clearInterval(timerId);
      console.log("Countdown stopped by user.");
      process.exit(0);
    }
  });
}, 2000); // start listening after 2 seconds
