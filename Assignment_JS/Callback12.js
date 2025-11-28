function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

timer(1000, (msg) => {
  console.log(msg); 
});
