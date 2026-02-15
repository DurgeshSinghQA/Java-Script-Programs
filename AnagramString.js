let str1 = "listet";
let str2 = "silent";    

if(str1.length === str2.length)
{
    let arr1 = str1.split("");
    let arr2 = str2.split("");
    arr1.sort();
    arr2.sort();

    let isAnagram = true;
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i] !== arr2[i])
        {
            isAnagram = false;
            break;
        }
    }
    if(isAnagram)
    {
        console.log("The given strings are anagrams");
    }
    else{
        console.log("The given strings are not anagrams");
    }
}
else{
    console.log("The given strings are not anagrams");
    
}
