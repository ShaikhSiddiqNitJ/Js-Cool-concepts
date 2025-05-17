//method 1
async function asyncSeriesExecuter(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        try{
           let res= await arr[i]()
           console.log(res)

        }
        catch(e)
        {

        }
    }
}

//method 2
function asyncSeriesExecuter(arr) {
    function helper(arr, count) {
        if (count === 0) return;

        let promise = arr.shift();

        promise().then((data) => {
            console.log(data); // print first
            helper(arr, count - 1); // then call next
        }).catch(() => {});
    }

    helper(arr, arr.length);
}



const asyncTask = function(i) {
  return function(){
   return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100*i)
   });
 }
}

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

asyncSeriesExecuter(promises);

// "Completing 3"
// "Completing 1"
// "Completing 7"
// "Completing 2"
// "Completing 5"