let num = 123;
let reversedNum = 0;
console.log("Original number is: " + num); //Output: Original number is: 123

while(num > 0) {

    let lastDigit = num % 10;
    reversedNum = (reversedNum * 10) + lastDigit;
    num =  Math.trunc(num / 10) ;  //Math.trunc() is used to remove the decimal part of the number and return the integer part. It is used here to remove the last digit from the number after extracting it.
}
console.log("Reversed number is: " + reversedNum); //Output: Reversed number is: 321