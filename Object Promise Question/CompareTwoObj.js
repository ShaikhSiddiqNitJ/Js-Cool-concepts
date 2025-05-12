//compare two object
const objA = {a: 1, b: { c: 2, d: 4 }};
const objB = {a: 1, b: {d: 4, c: 2 } }; // Reordered keys
const objC = {a: 1, b: {c: 3, d: 4 } }; // Different value
const objD = {a: 1, b: {c: 2}}; // Missing key
const objE = {a: 1, b: {c: 2, d: 4}, extra: 99 }
const objF = {}; // Empty object
const objG = {}; // Another empty object

function check(obj)
{
    return (obj!==null && typeof obj==='object')
}

function compareObjects(obj1,obj2)
{
   //pick all keys of obj1 and obj2 and sort bcz may be reordering
   let allkeys1=Object.keys(obj1).sort()
   let allkeys2=Object.keys(obj2).sort()
       //keys length not equal
   if(allkeys1.length!==allkeys2.length) return false
      //traverse all key
   for(let i=0;i<allkeys1.length;i++)
   {
        // key also availble in other set
        if (allkeys1[i] !== allkeys2[i]) return false;
        const key = allkeys1[i];
        const val1 = obj1[key];
        const val2 = obj2[key];
        const flag = check(val1) && check(val2);
               
      // either not obj case
      if(!flag && val1!==val2) return false
       //if both obj then recursion 
      else if(flag && !compareObjects(val1,val2)) return false
     
   }

  //final true (all case satisfyyyy)
  return true

}


console.log(compareObjects(objA, objB)); //true 
console.log(compareObjects(objA, objC)); // X false
console.log(compareObjects(objA, objD)); // X false
console.log(compareObjects(objA, objE)); // X false (Extra
console.log(compareObjects(objF, objG)); // true (Both
console.log(compareObjects({a: 1, b: 2}, {b: 2, a: 1 })); //
console.log(compareObjects({ a: 1, b: 2}, {a: 1, b: 3 })); //
