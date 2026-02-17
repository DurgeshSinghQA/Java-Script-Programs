/*
Input:
I am Durgesh Singh

Output:
1.  I ma hsegruD hgnis
2. ⁠ hgnis hsegruD ma I
3. ⁠Singh Durgesh am I

*/

let str = 'I am Durgesh Singh';
let arr = str.split(" ");

for(let i=0; i<arr.length; i++) {

    for(let j=arr[i].length-1; j>=0; j--) {
        
        process.stdout.write(arr[i].charAt(j));
    }
    process.stdout.write(" ");
}
console.log(); //Output: I ma hsegruD hgnis

for(let i=arr.length-1; i>=0; i--) {

    for(let j=arr[i].length-1; j>=0; j--)
    {
        process.stdout.write(arr[i].charAt(j));
    }
    process.stdout.write(" ");
}
console.log(); //Output: hgnis hsegruD ma I

for(let i=arr.length-1; i>=0; i--) {
    process.stdout.write(arr[i] + " ");
}   
console.log(); //Output: Singh Durgesh am I