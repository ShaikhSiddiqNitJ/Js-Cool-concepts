

//Question 7: chartAt

const str="siddiq shaikh"
console.log(str.charAt(2))//d

String.prototype.mycharAt=function(index)
{
    const str=this;
    const correctindex=index?index:0;
    if(correctindex<0 || correctindex>str.length)
    {
        return "";
    }
    return str[correctindex];
}
console.log(str.mycharAt(2))