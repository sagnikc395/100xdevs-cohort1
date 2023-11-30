//needs to do thing
// send a request to HTTP server
//get back a response and log it.
//work with using fetch.

function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callbackFn(result) {
  //console.log(result);
  //acces the body using async
  result.json().then(logResponseBody);
}

let sendObj = {
  method: "GET",
};
//this only expects 2 args and returns a promise
// so use the .then syntax.
fetch(`http://localhost:3000/handleSum?counter=10`, sendObj).then(callbackFn);
