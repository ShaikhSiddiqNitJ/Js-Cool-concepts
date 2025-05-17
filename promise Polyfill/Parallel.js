function asyncParallel(arr,cb)
{
let success=[]
let errorarr=[]
let count=0
arr.forEach((promise,index)=>{
promise.then((data)=>{
success.push(data)
}).catch((err)=>{
errorarr.push(err)
}).finally(()=>{
    count++
    if(count===arr.length)
    {
        cb(success,errorarr)
    }

    })
} )

}


function createAsyncTask() {
    const value = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (value < 5) {
          reject(`Error ${value}`);
        } else {
          resolve(value * 1000);
        }
      }, value * 10);
    });
  }
const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask()
];

asyncParallel(taskList, (error, result) => {
    console.log("errors", error);
    console.log("results", result);
  });
  
  
  //errors (4) ["Error 0", "Error 1", "Error 1", "Error 2"]
  //results (2) [5000, 9000]

// [1,6,7,7,9,9]

