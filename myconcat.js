

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