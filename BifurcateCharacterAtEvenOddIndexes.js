let str = 'I love JavaScript';
let evenIndexedChars = [];
let oddIndexedChars = [];

for(let i=0; i<str.length; i++) {
    if(i===0 || i%2 === 0) {
        evenIndexedChars.push(str.charAt(i));
    }  
    else {
        oddIndexedChars.push(str.charAt(i));
    }   

}

console.log("Characters at even indexes: " + evenIndexedChars); //Output: Characters at even indexes: I,J,v,S,r,p,t
console.log("Characters at odd indexes: " + oddIndexedChars); //Output: Characters at odd indexes:  ,o,e,a,a,c,i