
const x={
    name:'siddiq shaikh',
    roll:35,
}
function test(age,salary)
{
    console.log(this.name,this.roll,"age:",age,"salary:",salary)
}


test.apply(x,[5000,83485]);
//siddiq shaikh 35 age: 5000 salary: 83485
//parameter as arr

//apply

Function.prototype.myapply=function(context,args){  
    if(typeof this !=='function'){
        throw Error(this+ "is not callable function")
    }
    context.func=this //    
    context.func(...args)
}
test.myapply(x,[26,20000])

