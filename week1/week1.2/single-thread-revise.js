function count(first, last) {
  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
}

setTimeout(function () {
  // setTimeout using a callback
  // delegation of task to another thread
  // not on main thread
  console.log(`10 seconds have passed.`);
}, 10 * 1000);

let ans = count(1, 100_000_000);
console.log(ans);
