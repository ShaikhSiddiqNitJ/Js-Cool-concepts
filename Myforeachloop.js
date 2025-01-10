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