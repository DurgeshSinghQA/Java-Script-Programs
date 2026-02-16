let str = "kayak is good rotator deed "
let arr = str.split(" ");

let len = arr.length;
let maxPalindrome = "";
let maxLength = 0;

for (let i = 0; i < len; i++) {

    let ispalindrome = true;
    let wordLength = arr[i].length;

    for(let j = 0; j < wordLength / 2; j++) {
        if(arr[i].charAt(j) !== arr[i].charAt(wordLength-1)) {
            ispalindrome = false;
            break;
        }
        wordLength--;
    }

    if(ispalindrome) 
    {
        if(maxLength < arr[i].length) {
        maxLength = arr[i].length;
        maxPalindrome = arr[i];
        }

    }
}
console.log("Largest palindrome in the string is: " + maxPalindrome);


