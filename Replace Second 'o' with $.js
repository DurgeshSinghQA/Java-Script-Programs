let str = "tommorow"
let firstIndex = str.indexOf('o');

let secondIndex = str.indexOf('o', firstIndex + 1);    
str = str.slice(0, secondIndex) + '$' + str.slice(secondIndex + 1);
console.log(str);
