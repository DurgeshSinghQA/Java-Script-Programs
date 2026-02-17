let num = 13;

let isPrime = false;

while(!isPrime) {
    num = num + 1;
    for(let i=2; i<num; i++)
    {
        if(num % i === 0)
        {
            isPrime = false;
            break;
        }
        else if(i === num - 1) {
            isPrime = true;
        }
    }
}
console.log("Next prime number is: " + num);