let str = "Don't worry be happy";
let oldchar = "o";
let newchar = "a";  

str  = str.replace(oldchar, newchar); // replaces only the first occurrence of the old character
console.log(str);

str = str.replaceAll(oldchar, newchar); // replaces all occurrences of the old character
console.log(str);

//Replace character at a specific index
let index = 4;
let newChar = "x";
str = str.substring(0, index) + newChar + str.substring(index + 1);
console.log(str);

//Replace character at a specific index using split and join
let index2 = 6;
let newChar2 = "y"; 

let strArr = str.split("");
strArr[index2] = newChar2;
str = strArr.join("");
console.log(str);

//Replace character at a specific index using for loop
let index3 = 8;
let newChar3 = "z";     
let newStr = "";
for(let i=0;i<str.length;i++)
{
    if(i === index3)
    {
        newStr += newChar3;
    }
    else{
        newStr += str.charAt(i);
    }
}
console.log(newStr);   