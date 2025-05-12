const obj = {
    a: "Rowdy",
    b: "Coder",
    c: "Subscribe",
    channel: {f: "Subscribed" }
}


Object.prototype.myEntries=function(obj)
{
   //pick all keys
   let allKey=Object.keys(obj)
   //pick all values
   let allVal=Object.values(obj)

   //ans[]
   let ans=[]
   //travarse then push in arr
   for(let i=0;i<allKey.length;i++)
   {
      ans.push([allKey[i],allVal[i]])
   }
   //return ans
   return ans
}
    console.log(Object.entries(obj)); // Native method output
    console.log(Object.myEntries(obj)); // Polyfill output