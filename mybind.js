
const x={
    name:'siddiq shaikh',
    roll:35,
}
function test(age,salary)
{
    console.log(this.name,this.roll,"age:",age,"salary:",salary)
}



const res=test.bind(x,5000,83485);
//siddiq shaikh 35 age: 5000 salary: 83485
//return function then call function
res(); 

///Question 3: prototype of call apply and bind




//bind
Function.prototype.mybind=function(context,...args){  
    if(typeof this !=='function'){
        throw Error(this+ "is not callable function")
    }
    context.func=this //  

    return function(...otherargs){
    context.func(...otherargs,...args)
    }
}
const ans=test.mybind(x,26,20000)
ans();
//u can try also
// ans(38458);
