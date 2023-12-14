const jwt = require("jsonwebtoken");

//console.log(jwt);

const secret = "supersecret";

let ans = jwt.sign("sagnik321@gmail.com", secret);

console.log(ans);

//convert this string back

let res = jwt.verify(ans, secret, (err, val) => {
  if (err) {
    console.error(err);
  }
  console.log(`Original string was ${val}`);
});

console.log(res);
