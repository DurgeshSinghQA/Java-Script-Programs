let str = "I am software developer and I love to develop software applications I am a passionate developer";

let word = str.split(' '); // splits the string into an array of words

let wordLength = word.length; // gets the length of the array of words
let spaceCount = 0; // initializes the space count to 0
console.log(word);

let findWord = "developer";
let countOfGivenWord = 0;

for(let i=0;i<wordLength;i++)
{
    //console.log(word[i]);
    if(word[i] === findWord)
    {
         countOfGivenWord++;
    }
    
}

for(let i=0;i<str.length;i++)
{
    if(str.charAt(i) === ' ')
    {
        spaceCount++;
    }
}

console.log("The number of times the word \b'" + findWord + "' appears in the string is: " + countOfGivenWord);
console.log("Spaces: " + spaceCount);