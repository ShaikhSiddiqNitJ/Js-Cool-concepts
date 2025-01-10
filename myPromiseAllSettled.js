
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



    //promiseallsettle

    Promise.myPromiseAllSettled=function(promises)
    {
        return new Promise((resolve,reject)=>{
            if(!Array.isArray(promises))
            {
                reject(new Error("myPromiseAllSettled: undefined is not iterrable"));
                return;
            }
            const n=promises.length
            const res=[];
            if(n===0)
            {
                resolve({
                    status:'fulfilled',
                    value:''
                });
                return;
            }
            promises.forEach(async (promise,index)=>{
                try
                {
                    const ans= await promise; //promise
                    // console.log('my promise all ans:',ans)
                    const obj={
                        status:'fulfilled',
                        value:ans
                    }
                    res[index]=obj;
                    if(index==n-1)
                    {
                        resolve(res)
                        return;
                    }
                }
                catch(err)
                {
                    const obj={status:'rejected',reason:err}
                  reject(obj)
                  return;
                }
            })
        })
    }

    Promise.myPromiseAllSettled([t1(), t2(), t3()])
    .then((results) => {
        console.log(results); // Output: ["correct t1", "correct t2", "correct t3"]
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });