
const x={
    name:'siddiq shaikh',
    roll:35,
}
function test(age,salary)
{
    console.log(this.name,this.roll,"age:",age,"salary:",salary)
}

test.call(x,5000,83485);
//siddiq shaikh 35 age: 5000 salary: 83485
//parameter



// call
Function.prototype.mycall=function(context,...args){  
    if(typeof this !=='function'){
        throw Error(this+ "is not callable function")
    }
    context.func=this // 
   //step1: this= test
    // step2: context.func below is result
    // const x={
    //     name:'siddiq shaikh',
    //     roll:35,
    //     test:(age,salary)
    //     {
    //         console.log(this.name,this.roll,"age:",age,"salary:",salary)
    //     }
    // }
    
    context.func(...args)

//     console.log("runtime function:",this) //runtime function: [Function: test]
//    console.log("context :",context) //context : { name: 'siddiq shaikh', roll: 35 }
//    console.log("args :",...args) //args : 26 20000

}
test.mycall(x,26,20000)