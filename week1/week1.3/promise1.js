function getMedicine1() {
  let p = new Promise(function (resolve) {
    setTimeout(resolve, 1000);
  });
  console.log(p);
  return p;
}

getMedicine1().then(function () {
  console.log(`medicine1 has been received.`);
});
