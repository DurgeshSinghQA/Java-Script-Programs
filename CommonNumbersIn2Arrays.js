let arr1 = [2,3,1,5,4,6];
let arr2 = [9,6,4,11,15,2,16,1];

let commonNumbers = [];

for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
        if(arr1[i] === arr2[j]) {
            commonNumbers.push(arr1[i]);
        }   

    }
}
console.log("Common numbers in the two arrays are: " + commonNumbers);