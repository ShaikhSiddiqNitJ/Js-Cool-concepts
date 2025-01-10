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