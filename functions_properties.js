// factorial in a cached way using functions as arrays

function factorial(n) {
    if(isFinite(n) && n > 0 && n === Math.round(n)) {
        if(!(n in factorial)) 
            factorial[n] = n * factorial(n-1);
        return factorial[n];
    } else return NaN;
}
factorial[1]= 1;
console.log(new Date().getMilliseconds());
console.log(`${new Date().getMilliseconds()} -- Factorial of 10 is ${factorial(20)}`);
console.log(`${new Date().getMilliseconds()} -- Factorial of 3 is ${factorial(9)}`);
console.log(new Date().getMilliseconds());