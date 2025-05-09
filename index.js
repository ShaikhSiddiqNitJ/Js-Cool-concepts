//Question 1: foreach ,map, filter,reduce,some,any,every

//foreach
const arr=[1,2,3,4]
Array.prototype.myforeachloop=function(cb)
{
    if(!cb)
    {
        throw Error("myforeachloop Error: undefined is not a function")
    }
    const arr=this //this contain arr
    for(let i=0;i<arr.length;i++)
    {
        cb(arr[i],i,arr)
    }
}
arr.myforeachloop((item,index,self)=>{
console.log(item,index,self)
// 1 0 [ 1, 2, 3, 4 ]
// 2 1 [ 1, 2, 3, 4 ]
// 3 2 [ 1, 2, 3, 4 ]
// 4 3 [ 1, 2, 3, 4 ]
})

//map
Array.prototype.mymap=function(cb)
{
    if(!cb)
    {
        throw Error("mymap Error: undefined is not a function")
    }
    const copyarr=this //this contain arr
    const newarr=[]
    for(let i=0;i<copyarr.length;i++)
    {
        const res=cb(copyarr[i],i,copyarr)
        newarr.push(res)
    }
    return newarr;
}
const result=arr.mymap((item)=>{
    return item*2;
})
console.log(result)//[ 2, 4, 6, 8 ]

//filter
Array.prototype.myfilter=function(cb)
{
    if(!cb)
    {
        throw Error("myfilter Error: undefined is not a function")
    }
    const copyarr=this //this contain arr
    const newarr=[]
    for(let i=0;i<copyarr.length;i++)
    {
        const res=cb(copyarr[i],i,copyarr)
        if(res)
        {
        newarr.push(copyarr[i])
        }
    }
    return newarr;
}
const result=arr.myfilter((item)=>{
    return item>2;
})
console.log(result)// [ 3, 4 ]

//find
Array.prototype.myfind=function(cb)
{
    if(typeof cb!=='function')
    {
        throw Error("cb should be function")
    }
    const copyarr=this //this contain arr
    for(let i=0;i<copyarr.length;i++)
    {
        const res=cb(copyarr[i],i,copyarr)
        if(res)
        {
            return copyarr[i]
        }
    }
    return undefined;
}
arr.myfind((item)=>item.id==1)  //arr is object here

//some
Array.prototype.mysome=function(cb)
{
    if(typeof cb!=='function')
    {
        throw Error("cb should be function")
    }
    const copyarr=this //this contain arr
    for(let i=0;i<copyarr.length;i++)
    {
        const res=cb(copyarr[i],i,copyarr)
        if(res)
        {
            return true
        }
    }
    return false;
}
const res=arr.mysome((item,i,self)=>{
    return item>0
}) 
console.log(res)

//every 
Array.prototype.myevery=function(cb)
{
    if(typeof cb!=='function')
    {
        throw Error("cb should be function")
    }
    const copyarr=this //this contain arr
    for(let i=0;i<copyarr.length;i++)
    {
        const res=cb(copyarr[i],i,copyarr)
        if(!res)
        {
            return false
        }
    }
    return true;
}
const res=arr.myevery((item,i,self)=>{
    return item>20
}) 
console.log(res)

//reduce
Array.prototype.myreduce=function(cb,sum)
{
    if(typeof cb!=='function')
    {
        throw Error("cb should be function")
    }
    const copyarr=this //this contain arr
    for(let i=0;i<copyarr.length;i++)
    {
        const res=cb(sum,copyarr[i],i,copyarr)
       sum=res
    }
    return sum;
}
const res=arr.myreduce((sum,cur)=>{
    return sum+cur
},0) 
console.log(res)

//Question 2:  call apply and bind

const x={
    name:'siddiq shaikh',
    roll:35,
}
function test(age,salary)
{
    console.log(this.name,this.roll,"age:",age,"salary:",salary)
}

test.call(x,5000,83485);
//siddiq shaikh 35 age: 5000 salary: 83485
//parameter
test.apply(x,[5000,83485]);
//siddiq shaikh 35 age: 5000 salary: 83485
//parameter as arr
const res=test.bind(x,5000,83485);
//siddiq shaikh 35 age: 5000 salary: 83485
//return function then call function
res(); 

///Question 3: prototype of call apply and bind
// call
Function.prototype.mycall=function(context,...args){  
    if(typeof this !=='function'){
        throw Error(this+ "is not callable function")
    }
    context.func=this // 
   //step1: this= test
    // step2: context.func below is result
    // const x={
    //     name:'siddiq shaikh',
    //     roll:35,
    //     test:(age,salary)
    //     {
    //         console.log(this.name,this.roll,"age:",age,"salary:",salary)
    //     }
    // }
    
    context.func(...args)

//     console.log("runtime function:",this) //runtime function: [Function: test]
//    console.log("context :",context) //context : { name: 'siddiq shaikh', roll: 35 }
//    console.log("args :",...args) //args : 26 20000

}
test.mycall(x,26,20000)

//apply

Function.prototype.myapply=function(context,args){  
    if(typeof this !=='function'){
        throw Error(this+ "is not callable function")
    }
    context.func=this //    
    context.func(...args)
}
test.myapply(x,[26,20000])

//bind
Function.prototype.mybind=function(context,...args){  
    if(typeof this !=='function'){
        throw Error(this+ "is not callable function")
    }
    context.func=this //  

    return function(...otherargs){
    context.func(...otherargs,...args)
    }
}
const ans=test.mybind(x,26,20000)
ans();
//u can try also
// ans(38458);


//Question 3: promise---->>>>>> all,

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


    //Question 5: flat array
    const a=[1,2,4,[5,6]]
console.log(a.flat()) //[ 1, 2, 4, 5, 6 ]
Array.prototype.myflat=function()
{
    const arr=this
    const result=[];
    function flat(arr)
    {
        for(let i=0;i<arr.length;i++)
        {
            if(Array.isArray(arr[i]))
            {
                flat(arr[i]);
            }
            else
            {
                result.push(arr[i]);
            }
        }
    }
    flat(arr);
    return result;
}
console.log("myflat:",a.flat())

//Question 6: concat
const a=[1,2,4,[5,6]]
const b=[10,20,40]
const c=[106,24,40]
const d=23;
const e="siddiq"
console.log(a.concat(b,c,d,e))
// [
//     1,        2,   4,
//     [ 5, 6 ], 10,  20,
//     40,       106, 24,
//     40,       23,  'siddiq'
//   ]
//   myflat: [ 1, 2, 4, 5, 6 ]

// console.log(a.flat()) //[ 1, 2, 4, 5, 6 ]
Array.prototype.myconcat=function()
{
    let arr=[...this] //a (array)
    const args=arguments;
    
        for(let i=0;i<args.length;i++)
        {
            if(Array.isArray(args[i]))
            {
                arr=[...arr,...args[i]];
            }
            else
            {
                arr.push(args[i]);
            }
        
    }
    return arr;
}
console.log("myflat:",a.myconcat(e,b,c,e))

//Question 7: chartAt

const str="siddiq shaikh"
console.log(str.charAt(2))//d

String.prototype.mycharAt=function(index)
{
    const str=this;
    const correctindex=index?index:0;
    if(correctindex<0 || correctindex>str.length)
    {
        return "";
    }
    return str[correctindex];
}
console.log(str.mycharAt(2))
console.log("siddiq")
