const jwt = require("jsonwebtoken");

//console.log(jwt);

const secret = "supersecret";

let ans = jwt.sign("sagnik321@gmail.com", secret);
let obj = jwt.sign(
  {
    username: "sagnik321@gmail.com",
    password: "superS3cr3t",
  },
  secret
);

console.log(ans);
console.log(obj);
//convert this string back

jwt.verify(ans, secret, (err, val) => {
  if (err) {
    console.error(err);
  }
  console.log(`Original string was ${val}`);
});


jwt.verify(obj, secret, (err, res) => {
  if (err) {
    console.error(err);
  }
  const { username, pass } = res;
  console.log(`Original object was ${{ username, pass }}`);
});
