
const t1=()=>{
    return new Promise((
resolve,reject)=>{
        setTimeout(()=>{
            resolve("correct t1")
        },500)
    })
}
const t2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("correct t2")
        },200)
    })
}

const t3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("correct t3")
        },500)
    })
}

Promise.all([t1(), t2(), t3()])
    .then((results) => {
        console.log(results); // Output: ["correct t1", "correct t2", "correct t3"]
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });


    Promise.myall=function(promises)
    {
        return new Promise((resolve,reject)=>{
            if(!Array.isArray(promises))
            {
                reject(new Error("myall: undefined is not iterrable"));
                return;
            }
            const n=promises.length
            const res=[];
            if(n===0)
            {
                resolve(res)
                return;
            }
            promises.forEach(async (promise,index)=>{
                try
                {
                    const ans= await promise; //promise
                    console.log('my promise all ans:',ans)
                    res[index]=ans;
                    if(index==n-1)
                    {
                        resolve(res)
                        return;
                    }
                }
                catch(err)
                {
                  reject(err)
                  return;
                }
            })
        })
    }

    Promise.myall([t1(), t2(), t3()])
    .then((results) => {
        console.log(results); // Output: ["correct t1", "correct t2", "correct t3"]
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });