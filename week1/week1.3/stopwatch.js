let counter = 1;

function printCounter() {
  console.clear();
  console.log(counter);
  counter += 1;
}

// like setTimeout there is setInterval , which
// will keep calling on stuff after an interval.
setInterval(printCounter, 1 * 1000);

//simlilar thing  using a counter and iterate on it

let counter2 = 0;
for (let i = 0; i < 1000; i++) {
  counter2 += 1;
}
console.log(counter2);

// long running synchronous task
for (let i = 0; i < 100_000_000_000_000_000; i++) {
    // this will essentially will be blocked.
  counter2 += i;
}

console.log(counter2);
