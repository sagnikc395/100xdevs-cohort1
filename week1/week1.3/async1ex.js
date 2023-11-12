//suynchronous code

let counter = 0;
//CPU is blocked and complete it and then only will it come out.
for (let i = 0; i < 10000_000_000; i++) {
  counter += 1;
}

let fileContent = readFile('./a.txt',function(contents) {
    //read the file while logging with it.
    console.log(contents);
});
//if this is not async, it will be blocking the main thread while it reads the whole thing.
// js could have used the cpu and used some useful work till then.
// it is basically idle and could be basically used for something else.


console.log(counter);


//similar with setTimeout
//JS is single threaded in nature , so is the human brain 
// if we are only the single human doing it, we need to do it asynchornously.

//continue from https://harkirat.classx.co.in/video/105?courseId=2&ytFlag=0&isFolderCourse=1
// at 24:40