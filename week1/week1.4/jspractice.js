const string = "My name is sagnik";
console.log(string.split(" "));

function anagramCheck(str1, str2) {
  return str1.split("").reverse().join("") == str2.split("").reverse().join("")
    ? true
    : false;
}
