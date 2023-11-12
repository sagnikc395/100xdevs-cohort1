# Async , await ,callbacks and Promises
- Might be confusing for folks and more asynchronous javascript.
- Callbacks , Promises and Arrow Functions.
- Very basic fundamentals and can get away with a lot of fullstack development without knowing these things, but helpful later down the line when require for actual development.
- Very basic fundamentals -> easier to spirt later if fundamentals are right.

## Asynchronous 

- **Async programming is a technique that enables our program to start a potentially long-running task and be able to be responsive to other events while that task runs, rather than having to wait until that task has been finished. Once the task has been finished , our program is presented with the result.**
- When we are doing long running tasks, if our task runs on the same thread as the other tasks, the long running task will block the thread and wouldnt let the other things work.
- reading of file out of control on node.js ;depends on the filesystem.
- 