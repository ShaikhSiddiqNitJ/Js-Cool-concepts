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