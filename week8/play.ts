// some typescript practice 
//
//1. function that takes an array and returns the first elements of the array
//
interface User {
  name: string;
  age: number;
}
type NumberArr = number[];

const firstElement = (arr: Array<number>) : number => {
  return arr[0];
}

const arr = firstElement([1,2,3,4]);
console.log(arr);

//2. take an array of numbers or string as inoput and return the first element of the array 

type NumorStringType = number | string;

const firstElement2 = (arr: Array<NumorStringType>): NumorStringType => {
  return arr[0];
}


const arr1 = firstElement2(["abc","def"]);
const arr2 = firstElement2([1,2,3,4,5,7,6]);
//ugly solution is to write 2 functions and check
console.log(typeof arr1 == 'string' ? arr1.toUpperCase() : arr1); 

//console.log(arr1,arr2);
//
//better to check type at runtimes using generics

const firstElement3 = <T>(arr: T[]) : T => {
 //array is of type T array
  //it is a generic function
  return arr[0];
}

const arr3 = firstElement3<number>([100,200,300]);
const arr4 = firstElement3<string>(["lambda","beta","gamma"]);

console.log(arr3,arr4);
