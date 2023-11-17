//callback hell demo

//async tasks
setTimeout(function () {
  console.log(`Medicine 1 received.`);
}, 1000);

setTimeout(function () {
  console.log(`Medicine 2 received.`);
}, 2000);

setTimeout(function () {
  console.log(`Medicine 3 received.`);
}, 3000);

//now making the worker process life difficult ;
// when giving the 1st medicine ask him to get the second
// medicine too

//chaining :- call 1 async call after the other.
function medicine2Get() {
  console.log(`Medicine 2 received.`);
}

function medicine1Get() {
  console.log(`medicine 1 received.`);
  setTimeout(medicine2Get, 2000);
}

setTimeout(medicine1Get, 1000);

//this chaining can get ugly , especailly with large number of such chains
// as thus called as callback hell
setTimeout(function med1Get() {
  console.log(`med 1 received`);
  setTimeout(function med2Get() {
    console.log(`med 2 received.`);
    setTimeout(function med3Get() {
      console.log(`med3 received`);
    });
  }, 2000);
}, 1000);
