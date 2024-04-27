/**
  
  **
  ****
  ******
  ********
 */

function starryPattern(rows) {
  let pattern = ``;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < i; j++) {
      pattern += "**";
    }
    pattern += "\n";
  }
  return pattern.trim();
}

console.log(starryPattern(5));
