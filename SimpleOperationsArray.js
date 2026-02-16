//Declare Array
let arr = [1, 2, 3, 4, 5];

//Print Array
console.log("Complete array: " + arr);

//Accessing Array Elements by Index     
console.log("arr[0]: " + arr[0]); //Output: 1
console.log("arr[2]: " + arr[2]); //Output: 3

//print array using for loop
console.log("Array elements using for loop:");
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}   

//print array using for of loop
console.log("Array elements using \bfor \bof loop:");
for(let num of arr)
{
    console.log(num);
}   

//add element to the end of the array using push method
console.log("Array before push: " + arr);
arr.push(6);
console.log("Array after push: " + arr); //Output: [1, 2, 3, 4, 5, 6]  

//remove last element from the array using pop method
console
arr.pop();
console.log("array after pop: " + arr); //Output: [1, 2, 3, 4, 5] 

//print removed element
let removedElement = arr.pop();
console.log("Removed element: " + removedElement); //Output: Removed element: 5
console.log("Array after removing last element: " + arr); //Output: [1, 2, 3, 4]    

//add element to the beginning of the array using unshift method
console.log("Array before unshift: " + arr);
arr.unshift(0);
console.log("Array after unshift: " + arr); //Output: [0, 1, 2, 3, 4]     

//remove first element from the array using shift method
console
arr.shift();
console.log("Array after shift: " + arr); //Output: [1, 2, 3, 4]    

//print removed element
let removedFirstElement = arr.shift();
console.log("Removed first element: " + removedFirstElement); //Output: Removed first element: 1
console.log(arr); //Output: [2, 3, 4]   

//find index of an element using indexOf method
let index = arr.indexOf(3);
console.log("Index of 3: " + index); //Output: Index of 3: 1    

//check if an element exists in the array using includes method
let exists = arr.includes(3);   
console.log("Does 3 exist in the array? " + exists); //Output: Does 3 exist in the array? true

//get the length of the array
let length = arr.length;
console.log("Length of the array: " + length); //Output: Length of the array: 3 

//sort the array in ascending order
arr.sort();
console.log("Sorted array: " + arr); //Output: Sorted array: 2,3,4

//reverse the array
arr.reverse();
console.log("Reversed array: " + arr); //Output: Reversed array: 4,3,2

//join array elements into a string
let joinedString = arr.join(", ");
console.log("Joined string: " + joinedString); //Output: Joined string: 4, 3, 2

//split a string into an array
let str = "Hello, World!";
let splitArray = str.split(", ");
console.log("Split array: " + splitArray); //Output: Split array: Hello,World!

//concatenate thee arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let concatenatedArray = arr1.concat(arr2, arr3);
console.log("Concatenated array: " + concatenatedArray); //Output: Concatenated array: 1,2,3,4,5,6,7,8,9    

//slice a portion of the array
let slicedArray = concatenatedArray.slice(2, 5);// slice from index 2 to index 4 (5 is not included) and slice does not modify the original array
console.log("Sliced array: " + slicedArray); //Output: Sliced array: 3,4,5  

//slice with negative index
let slicedArrayNegative = concatenatedArray.slice(-4, -1);
console.log("Sliced array with negative index: " + slicedArrayNegative); //Output: Sliced array with negative index: 6,7,8

//slice with negative start index and negative end index
let slicedArrayStart = concatenatedArray.slice(4);
console.log("Sliced array with only start index: " + slicedArrayStart); //Output: Sliced array with only start index: 5,6,7,8,9 

//slice with only end index
let slicedArrayEnd = concatenatedArray.slice(0, 4);
console.log("Sliced array with only end index: " + slicedArrayEnd); //Output: Sliced array with only end index: 1,2,3,4 

//slice with negative start index and positive end index
let slicedArrayNegativeStart = concatenatedArray.slice(-5, 4);
console.log("Sliced array with negative start index and positive end index: " + slicedArrayNegativeStart); //Output: Sliced array with negative start index and positive end index: 5,6,7,8,9   

//slice wirh positive start index and negative end index
let slicedArrayPositiveStart = concatenatedArray.slice(2, -2);
console.log("Sliced array with positive start index and negative end index: " + slicedArrayPositiveStart); //Output: Sliced array with positive start index and negative end index: 3,4,5,6,7,8

//slice with only negative start index
let slicedArrayOnlyNegativeStart = concatenatedArray.slice(-3);
console.log("Sliced array with only negative start index: " + slicedArrayOnlyNegativeStart); //Output: Sliced array with only negative start index: 7,8,9   

//slice with only negative end index
let slicedArrayOnlyNegativeEnd = concatenatedArray.slice(0, -3);
console.log("Sliced array with only negative end index: " + slicedArrayOnlyNegativeEnd); //Output: Sliced array with only negative end index: 1,2,3,4,5,6   

//slice with no parameters
let slicedArrayNoParams = concatenatedArray.slice();
console.log("Sliced array with no parameters: " + slicedArrayNoParams); //Output: Sliced array with no parameters: 1,2,3,4,5,6,7,8,9

//splice an array to add new elements
concatenatedArray.splice(2, 0, 10, 11);// splice from index 2, remove 0 elements and add 10 and 11 at index 2 and splice modifies the original array    



console.log("Concatenated array after splice: " + concatenatedArray); //Output: Concatenated array after splice: 1,2,10,11,6,7,8,9  

//remove all elements from the given index to the end of the array using splice method
concatenatedArray.splice(6);
console.log("Concatenated array after removing elements from index 4: " + concatenatedArray); //Output: Concatenated array after removing elements from index 4: 1,2,10,11  

//remove few elements from the given index to the end of the array using splice method
concatenatedArray.splice(2, 1);
console.log("Concatenated array after removing 2 elements from index 2: " + concatenatedArray); //Output: Concatenated array after removing 2 elements from index 2: 1,2    

//splice an array to remove elements and add new elements
console.log("Concatenated array before splice: " + concatenatedArray);
let splicedArray = concatenatedArray.splice(2, 3, 10, 11);// splice from index 2, remove 3 elements and add 10 and 11 at index 2 and splice modifies the original array 
console.log("Spliced array: " + splicedArray);

//splice with negative index
concatenatedArray.splice(-1, 0, 12);    
console.log("Concatenated array after splice with negative index: " + concatenatedArray); //Output: Concatenated array after splice with negative index: 1,2,12