const asyncSeriesExecuter = function(tasks) {
    tasks.reduce((acc, curr) => {
      //return the last executed task
      return acc.then(() => {
        //create a new promise
        return new Promise((resolve, reject) => { 
          //exec the async task
          curr(val => {
            console.log(val);
            //resolve after task is completed
            resolve();
          }); 
        });
      });
    }, Promise.resolve());
  }

const asyncTask = function(i) {
  return function(callback){
    setTimeout(() => {
      callback(`Completing ${i}`)
    }, 100*i);
  };
}

const tasks = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

asyncSeriesExecuter(tasks);

Output:
"Completing 3"
"Completing 1"
"Completing 7"
"Completing 2"
"Completing 5"