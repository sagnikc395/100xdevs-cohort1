function compelxFn(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
//logging time
var startTime = new Date().getTime();

//10 million
console.log(compelxFn(1_000_000_000));

//rather than calling the thing this many times, divide and conquer
const a = compelxFn(1_000_000_000 / 2);
const b = compelxFn(1_000_000_000 / 2);
//chunkify thing : wont work as each chunk is blocked by the previous one 
// single threaded
const c1 = compelxFn(1_000_000_000/10);
const c2 = compelxFn(1_000_000_000/10);
const c3 = compelxFn(1_000_000_000/10);
///.... 


var endTime = new Date().getTime();
console.log((endTime - startTime) / 1000);
