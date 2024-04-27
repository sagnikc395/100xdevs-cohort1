function promiseBody(resolve) {
  setTimeout(resolve, 1000);
}

function medicine1Get() {
  let answer = new Promise(promiseBody);
  return answer;
}

function printThing() {
  console.log(`welcome medicine 1`);
}

let medicine = medicine1Get();
medicine.then(printThing);
medicine.finally();