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