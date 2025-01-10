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