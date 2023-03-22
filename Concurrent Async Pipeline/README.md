Given an array of async functions, and the maxium concurrency, create a function to take the functions and run them at the the maxium concurrency if possible. Return the fulfilled and rejected numbers of the pipeline after all the tasks are completed.

**Note:** If one of the concurrent tasks is completed, another async task should be excuted immediately.