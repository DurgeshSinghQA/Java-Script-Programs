let arr = [1,2,3,4,7,8,6,5,9];

// Initialize variables to store the highest and second highest numbers
let highest = -Infinity;
let secondHighest = -Infinity;

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > highest) {
        secondHighest = highest; // Update second highest before updating highest
        highest = arr[i]; // Update highest
    }
    else if (arr[i] > secondHighest && arr[i] < highest) {
        secondHighest = arr[i]; // Update second highest only if it's less than highest
    }
}   
console.log("Second highest number is: " + secondHighest);