/* String str = "a1b2c3";
Print below pattern
a
bb
ccc
*/

let str = "a1b2c3";

if(!isNumber(str.charAt(0))) 
{
    for(let i=0; i<str.length; i+=2) 
    {
        let count = parseInt(str.charAt(i+1));
        for(let j=0; j<count; j++) {
            process.stdout.write(str.charAt(i));
        }
        process.stdout.write('\n'); 
    }
   
}

function isNumber(char) {
    return /^[0-9]$/.test(char);    
}