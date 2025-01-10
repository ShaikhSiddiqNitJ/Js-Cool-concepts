
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

    //promise.any

    Promise.myany=function(promises)
    {
        return new Promise((resolve,reject)=>{
            if(!Array.isArray(promises))
            {
                reject(new Error("myany: undefined is not iterrable"));
                return;
            }
            const n=promises.length
            const res=[];
            if(n===0)
            {
                reject({
                    message:new Error('empty array passed'),
                    errors
                });
                return;
            }
            promises.forEach(async (promise,index)=>{
                try
                {
                    const ans= await promise; //promise
                    resolve(ans)
                    return;
                   
                    
                }
                catch(err)
                {
                    res[index]=err;
                    if(index===n-1)
                    {
                        resolve({
                            message:new Error("all promises were rejected"),
                            errors
                        })
                        
                    }                  
                }
            })
        })
    }

    Promise.myany([t1(), t2(), t3()])
    .then((results) => {
        console.log(results); // Output: ["correct t1", "correct t2", "correct t3"]
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });