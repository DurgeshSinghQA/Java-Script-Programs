let num1 = 0;
let num2 = 1;
let num3;

for(let i = 0; i < 10; i++) {
    process.stdout.write(num1 + " ");
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
}   

