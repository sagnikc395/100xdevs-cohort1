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


// ASSIGNMENT 2: Create a swap function that can takes 2 arguments of the same type , args can be eithter  2 strings, numbers, or booleans, (Same type) 
// the function should swap them and return an array with the first element as the second one and vice versa


function swap<T>(item1: T, item2: T): ([T,T]){
  return [item2,item1];
}

function swapMulti<T,K>(item1:T | K, item2:T | K): ([K|T,T|K]){
  return [item2,item1];
}


let swap1= swap<number,number>(123,456);
let swap2 = swap<boolean,boolean>(false,true);

console.log(swap1,swap2);
swap1 = swapMulti<number,boolean>(123,false);
console.log(swap1);


//using partials 
//
interface Todo {
  title: string;
  description: string;
  id: number;
  done: boolean;
}

type UpdateTodoInput = Partial<Todo>;

function updateTodo(id: number, newProp: UpdateTodoInput){
  //
}

updateTodo(1,{
  description: "some description"
});
