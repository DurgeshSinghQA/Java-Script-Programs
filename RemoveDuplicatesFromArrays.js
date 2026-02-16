let arr = [1,2,3,4,1,2];

console.log("Original array: " + arr);  
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--; // Decrement j to check the new element at index j after splicing
        }

    }
}
console.log("Array after removing duplicates: " + arr);