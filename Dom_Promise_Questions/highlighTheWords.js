const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ['Front', 'End', 'JavaScript'];
function highlight(str,keys)
{
//set
//array mai string le lo
//traverse array and check in set
     //yes
     //no (break)
        //prefix & suffix both in set
         //prefix and suffix
         // not prefix and suffix
        //  prefix and suffix not
        //final
let ans=[]
 let s=new Set(keys) 
 let arr=str.split(" ")  
 for(let i=0;i<arr.length;i++)
 {
    let word=arr[i]
    let res=''
    if(s.has(word))
    {
        res=`<strong> ${word}</strong>`
    }
    else{
    for(let i=0;i<word.length;i++)
    {
        let prefix=word.substr(0,i)
        let suffix=word.substr(i)
        if(s.has(prefix) && s.has(suffix))
        {
            res=`<strong> ${prefix}${suffix}</strong>`
            }
        else if(!s.has(prefix) && s.has(suffix))
        {
            res=`<strong> ${prefix}</strong>`
            }
        else if(s.has(prefix) && !s.has(suffix))
            {
                res=`<strong> ${suffix}</strong>`
            }


    }
}  
res=res===''?word:res
ans.push(res)
 }

 return ans.join('')
}

console.log(highlight(str, words));

// "Ultimate <strong>JavaScript</strong> / <strong>FrontEnd</strong> Guide"

