//method chaining / currying

// function medicine2Get() {
//   console.log(`Medicine 2 received`);
// }

// function medicine1Get() {
//   console.log(`Medicine 1 received`);
//   setTimeout(medicine2Get, 2000);
// }

// setTimeout(medicine1Get, 1000);

setTimeout(function medicine1Get() {
  console.log("medicine 1 received");
  setTimeout(() => {
    console.log(`waiting ....`);
  }, 1000);
  setTimeout(function medicine2Get() {
    console.log("medicine 2 received");
  }, 2000);
}, 1000);
