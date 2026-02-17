
let str = "durgesh singh is a software development engineer in test";



for(let i=0; i<str.length; i++) {
   let isRepeated = false;
    for(let j=0; j<str.length; j++) {

        if(str.charAt(i) === str.charAt(j) && i !== j) {
            
            isRepeated = true;
            break;
        }
    }
    if(isRepeated === false) {
        console.log("First non-repetitive character in the string is: " + str.charAt(i));
        break;
    }
}