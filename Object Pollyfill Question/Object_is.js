//Object.is()


function customObjectls(x,y)
{
  //both equal check fro +0 and -0
  if(x===y)
  {
     return x!==0 || x===1/y
  }
  //check for NaN
  return x!==x && y!==y
}

console.log(customObjectls(25, 25)); // true
console.log(customObjectls("hello", "hi")); // X false
console.log(customObjectls(NaN, NaN)); // true
console.log(customObjectls(-0, 0)); // false