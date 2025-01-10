
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

    //promise.race


    Promise.myrace=function(promises)
    {
        return new Promise((resolve,reject)=>{
            if(!Array.isArray(promises))
            {
                reject(new Error("myrace: undefined is not iterrable"));
                return;
            }
            const n=promises.length
            const res=[];
            if(n===0)
            {
                resolve();
                return;
            }
            promises.forEach(async (promise,index)=>{
                return Promise.resolve(promise).then(resolve).catch(reject);
            })
    })
}

    Promise.myrace([t1(), t2(), t3()])
    .then((results) => {
        console.log(results); // Output: ["correct t1", "correct t2", "correct t3"]
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });