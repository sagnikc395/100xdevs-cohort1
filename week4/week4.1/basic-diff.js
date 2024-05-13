function findDiff(oldArr, newArr) {
  let updated = 0;
  let added = 0;
  let diffArr = [];
  for (let i = 0; i < newArr.length; i++) {
    let item = newArr[i];
    let found = false;
    for (let j = 0; j < oldArr.length; j++) {
      if (oldArr[j] === item) {
        found = true;
      }
    }
    if (found) {
      updated += 1;
    } else {
      added += 1;
      diffArr.push(item);
    }
  }

  return {
    updated: updated,
    added: added,
    diffArr,
  };
}

console.log(findDiff([1, 2, 3], [1, 2, 3, 4, 5]));
