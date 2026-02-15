let str = "I am a software developer         and I love to develop             software applications. I am a passionate developer.";
let oldstr = "developer";
let newstr = "Development Engineer In Test";

str = str.replace(oldstr, newstr); // replaces only the first occurrence of the old string
//console.log(str);   

//Replace all occurrences of the old string
str = str.replaceAll(oldstr, newstr); // replaces all occurrences of the old string
console.log(str);

//Replace duplicate spaces with a single space
str = str.replace(/\s+/g, ' '); // replaces multiple spaces with a single space
console.log(str);
