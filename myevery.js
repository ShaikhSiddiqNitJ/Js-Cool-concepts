
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