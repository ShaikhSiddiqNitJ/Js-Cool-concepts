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