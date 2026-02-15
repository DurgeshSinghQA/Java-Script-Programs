let str = "I am learning JavaScript";

let vowelsCount = 0;
let consonantsCount = 0;  
let spaceCount = 0;  

for(let i=0;i<str.length;i++)
{
    if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u' || str.charAt(i) === 'A' || str.charAt(i) === 'E' || str.charAt(i) === 'I' || str.charAt(i) === 'O' || str.charAt(i) === 'U')
    {
        vowelsCount++;
    }
    else if(str.charAt(i) !== ' ')
    {
        consonantsCount++;
    }
    else if(str.charAt(i) === ' ')
    {
        spaceCount++;
    }
}
console.log("The number of vowels in the string is: " + vowelsCount);
console.log("The number of consonants in the string is: " + consonantsCount);
console.log("The number of spaces in the string is: " + spaceCount);