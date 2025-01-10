
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